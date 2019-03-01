import homunculus from 'homunculus';
import Tree from './Tree';

class Yurine {
  constructor() {
    this.parser = null;
    this.node = null;
  }
  parse(code) {
    this.parser = homunculus.getParser('csx');
    this.node = this.parser.parse(code);
    let tree = new Tree();
    return tree.parse(this.node);
  }
  tokens() {
    return this.ast ? this.parser.lexer.tokens() : null;
  }
  ast() {
    return this.node;
  }

  static parse(code) {
    return new Yurine().parse(code);
  }
}

export default new Yurine();
