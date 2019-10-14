import homunculus from 'homunculus';
import csx from './csx';
import ignore from './ignore';

let Node = homunculus.getClass('node', 'csx');

class Tree {
  constructor() {
    this.res = '';
  }
  parse(node) {
    this.recursion(node, false);
    return this.res;
  }
  recursion(node) {
    let self = this;
    let isToken = node.isToken();
    if(isToken) {
      let token = node.token();
      if(token.isVirtual()) {
        return;
      }
      if(!token.ignore) {
        this.res += token.content();
      }
      while(token.next()) {
        token = token.next();
        if(token.isVirtual() || !ignore.S.hasOwnProperty(token.type())) {
          break;
        }
        if(!token.ignore) {
          this.res += token.content();
        }
      }
    }
    else {
      switch(node.name()) {
        case Node.CSXElement:
        case Node.CSXSelfClosingElement:
          this.res += csx(node, {});
          return;
      }
      node.leaves().forEach(function(leaf) {
        self.recursion(leaf);
      });
    }
  }
}

export default Tree;
