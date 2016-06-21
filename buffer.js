var buf=new Buffer(15);
var hao=buf.write("这是哪里");
//buf.write();返回number类型，表示写入了多少8位字节流
console.log(hao);

var buf=new Buffer(26);
for(var i=0;i<26;i++){
	buf[i]=i+65;
	//65在UTF-8中代表A;依此类推，Z代表90;
	//97在UTF-8中代表a;依此类推，z代表122;
}
console.log(buf.toString("ASCII"));
console.log(buf.toString("ASCII",0,5));
console.log(buf.toString("UTF-8",0,5));
console.log(buf.toString(undefined,0,5));
//buf.toString()返回一个解码过的string类型；即返回字符串；


var buf=new Buffer("不要听");
var json=buf.toJSON(buf);
//buf.toJSON()返回JSON对象;
console.log(json);

var buf1=new Buffer("Hello,");
var buf2=new Buffer("my name is Yang qianru.");
var buf3=Buffer.concat([buf1,buf2]);
//buffer.concat()返回一个多个成员合并的新的Buffer对象；即合并buffer;
console.log("Buf3的内容："+buf3.toString());


var buff1=new Buffer("ab");
var buff2=new Buffer("啊AB");
var result=buff1.compare(buff2);
//A.compare(B),A与B比较,两者需要是相同数据类型，否则会返回-1；返回一个数字，0代表完全相同；1代表a在b之后；-1代表a在b之后；-1代表a在b之前；
console.log(buff1.toString()+" "+buff2.toString())
console.log(result);


var buffer=new Buffer("ABCder");
var two=new Buffer(2);
var slice=buffer.slice(0,1);
//A.slice(0,n);从索引0位置剪切到索引n的位置；
buffer.copy(two);
//A.copy(B);把A里面的内容复制给B
console.log("two内容："+two.toString());
console.log("剪切内容："+slice.toString());
console.log("buffer长度："+buffer.length);
//buffer.length  返回buffer对象所占据的内存长度；
buffer.fill("你好");
console.log(buffer.toString());

