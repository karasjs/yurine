import homunculus from 'homunculus';
import Tree from './Tree';
import ignore from './ignore';
import join from './join';

let Token = homunculus.getClass('token', 'csx');
let Node = homunculus.getClass('node', 'csx');

function elem(node) {
  let res = '';
  let tag = selfClose(node.first());
  //open和selfClose逻辑复用
  res += tag.res;
  res += ',[';
  let comma = false;
  for(let i = 1, len = node.size(); i < len - 1; i++) {
    let leaf = node.leaf(i);
    switch(leaf.name()) {
      case Node.CSXChild:
        if(comma) {
          res += ',';
          comma = false;
        }
        res += child(leaf);
        comma = true;
        break;
      case Node.TOKEN:
        let s = leaf.token().content();
        //open和close之间的空白不能忽略
        if(/^\s+$/.test(s)) {
          if(leaf.prev().name() === Node.CSXOpeningElement && leaf.next().name() === Node.CSXClosingElement) {
            res += '"' + s.replace(/"/g, '\\"').replace(/\r/g, '\\r').replace(/\n/g, '\\n\\\n') + '"';
          }
          else {
            res += s;
          }
        }
        else {
          if(comma) {
            res += ',';
            comma = false;
          }
          res += '"' + s.replace(/"/g, '\\"').replace(/\r/g, '\\r').replace(/\n/g, '\\n\\\n') + '"';
          comma = true;
        }
        break;
      default:
        if(comma) {
          res += ',';
          comma = false;
        }
        res += parse(leaf);
        comma = true;
    }
  }
  res += ']';
  if(tag.isCp && tag.name) {
    res += ',"' + tag.name + '"';
  }
  res += ')';
  if(node.last().name() === Node.CSXClosingElement) {
    res += ignore(node.last(), true).res;
  }
  return res;
}
function selfClose(node, isClose) {
  let res = '';
  let name;
  let first = node.leaf(1);
  if(first.isToken()) {
    name = first.token().content();
  }
  else if(first.name() === Node.CSXMemberExpression) {
    name = first.first().token().content();
    for(let i = 1, len = first.size(); i < len; i++) {
      name += first.leaf(i).token().content();
    }
  }
  let isCp = /^[A-Z]/.test(name);
  if(isCp) {
    res += 'karas.createCp(';
    res += name;
  }
  else if(/^\$/.test(name)) {
    res += 'karas.createGm(';
    res += '"' + name + '"';
  }
  else {
    res += 'karas.createVd(';
    res += '"' + name + '"';
  }
  res += ',[';
  for(let i = 2, len = node.size(); i < len - 1; i++) {
    let leaf = node.leaf(i);
    if(i !== 2) {
      res += ',';
    }
    switch(leaf.name()) {
      case Node.CSXBindAttribute:
        res += attr(leaf);
        break;
      case Node.CSXAttribute:
        res += attr(leaf);
        break;
      case Node.CSXSpreadAttribute:
        res += spread(leaf);
        break;
    }
  }
  res += ']';
  if(isClose && isCp) {
    res += ',[],"' + name + '"';
  }
  return {
    res,
    isCp,
    name,
  };
}
function attr(node) {
  let res = '';
  let key = node.first().token().content();
  let name = node.parent().leaf(1).token().content();
  let isCp = /^[A-Z]/.test(name);
  let k = '["' + key + '"';
  res += k + ',';
  let v = node.last();
  if(v.isToken()) {
    v = v.token().content();
    res += v;
  }
  else {
    res += child(v);
  }
  res += ']';
  return res;
}
function spread(node) {
  return join(node.leaf(2));
}
function child(node) {
  return new Tree().parse(node).replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1');
}

function parse(node) {
  let res = '';
  switch(node.name()) {
    case Node.CSXElement:
      res += elem(node);
      break;
    case Node.CSXSelfClosingElement:
      res += selfClose(node, true).res;
      res += ')';
      break;
  }
  return res;
}

export default parse;
