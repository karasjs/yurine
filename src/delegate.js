import homunculus from 'homunculus';
import InnerTree from './InnerTree';

let Token = homunculus.getClass('token', 'csx');
let Node = homunculus.getClass('node', 'csx');

let S = {};
S[Token.LINE] = S[Token.COMMENT] = S[Token.BLANK] = true;

let res = '';

function parse(node) {
  let prmr = node.leaf(1);
  if(prmr && prmr.name() === Node.PRMREXPR) {
    let objltr = prmr.first();
    let tree = new InnerTree();
    res = tree.parse(node);
    res = res.replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1');
  }
  else {
    let tree = new InnerTree();
    res = tree.parse(node);
    res = res.replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1');
  }
  return res;
}

export default parse;
