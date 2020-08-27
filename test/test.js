var expect = require('expect.js');

var yurine = require('../index');

describe('api', function() {
  it('#parse', function() {
    expect(yurine.parse).to.be.a(Function);
  });
});

describe('simple', function() {
  it('html tag lower', function() {
    var s = '<div>test</div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{},["test"])');
  });
  it('Component tag upper', function() {
    var s = '<Cmpt>test</Cmpt>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createCp(Cmpt,{},["test"],"Cmpt")');
  });
  it('Component close', function() {
    var s = '<Cmpt/>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createCp(Cmpt,{},[],"Cmpt")');
  });
  it('no children', function() {
    var s = '<div></div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{},[])');
  });
  it('child is a var', function() {
    var s = '<div>{test}</div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{},[test])');
  });
  it('multi children', function() {
    var s = '<div>t1{test}t2</div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{},["t1",test,"t2"])');
  });
  it('multi var children', function() {
    var s = '<div>{t1}{test}t2</div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{},[t1,test,"t2"])');
  });
  it('nest html', function() {
    var s = '<div>text<p><span>xxx</span></p></div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{},["text",karas.createVd("p",{},[karas.createVd("span",{},["xxx"])])])');
  });
  it('props', function() {
    var s = '<a href="#">link</a>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("a",{"href":"#"},["link"])');
  });
  it('prop with -', function() {
    var s = '<div data-test="-"></div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{"data-test":"-"},[])');
  });
  it('multi props', function() {
    var s = '<div class="c" title="title"></div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{"class":"c","title":"title"},[])');
  });
  it('self close', function() {
    var s = '<img src="xxx"/>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("img",{"src":"xxx"})');
  });
  it('close error', function() {
    var s = '<img src="xxx">';
    expect(function() {
      yurine.parse(s);
    }).to.throwError();
  });
  it('tag blank', function() {
    var s = '<div> {ttt }</div >';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{},[ ttt ]) ');
  });
  it('virtual', function() {
    var s = '<div />;';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{});');
  });
  it('quote', function() {
    var s = '<img src={"test"\n}/>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("img",{"src":"test"\n})');
  });
  it('blank', function() {
    var s = '<div> </div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{},[" "])');
  });
  it('line', function() {
    var s = '<div>\n</div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{},["\\n\\\n"])');
  });
  it('line2', function() {
    var s = '<pre>a\nb</pre>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("pre",{},["a\\n\\\nb"])');
  });
  it('enter', function() {
    var s = '<div>\r</div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{},["\\r"])');
  });
  it('blank between tag', function() {
    var s = '<div> <span/>\n</div>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("div",{},[ karas.createVd("span",{})\n])');
  });
  it(':', function() {
    var s = '<wb:share-button></wb:share-button>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.createVd("wb:share-button",{},[])');
  });
  it('</>', function() {
    var s = '<>123</>';
    var res = yurine.parse(s);
    expect(res).to.eql('karas.Fragment(["123"])');
  });
});

describe('classes', function() {
  it('class', function() {
    var s = 'class A{render(){return <div/>}}';
    var res = yurine.parse(s);
    expect(res).to.eql('class A{render(){return karas.createVd("div",{})}}');
  });
});
