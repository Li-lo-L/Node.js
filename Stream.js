/* 从流中读取数据 */
/* var fs=require("fs");
//使用require模块来载入fs模块；并把实例化的fs赋值给变量fs;

var data="";

var readerStream=fs.createReadStream("inpu1t.txt");
//创建可读流;

readerStream.setEncoding("UTF8");
//设置编码为UTF8

readerStream.on("data",function(chunk){
	data=chunk;
});
//当有数据可读时触发；

readerStream.on("end",function(){
	console.log(data);
});
//没有更多的数据可读时触发;

readerStream.on("error",function(err){
	console.log(err.stack);
});
//在接收和写入过程中发生错误时触发。
//借助error.stack可加速javascript错误诊断;

console.log("程序执行完毕");  */


/* 写入流 */
/* var fs=require("fs");
var data="啦啦啦，啦啦啦，我是卖报点的小行家~~";
var writerStream=fs.createWriteStream("input.txt");
//创建一个可以写入的流，写入到文件outPut.txt中;

writerStream.write(data,"UTF8");
//使用utf8编码写入数据;

writerStream.end();
//标记文件末尾

writerStream.on("finish",function(){
	console.log("写入完成");
});
//所有数据已被写入到底层系统时触发

writerStream.on("error",function(err){
	console.log(err.stack);
});
//在接收和写入过程中发生错误时触发。

console.log("程序执行完毕"); */

/* 管道流 创建一个新的文件，并把读取到的文件内容写入到新的文件里*/
/* var fs=require("fs");
var readerStream=fs.createReadStream("input.txt");
var writerStream=fs.createWriteStream("output.txt");

readerStream.pipe(writerStream);

console.log("程序执行完毕"); */

/*
压缩文件
zlib是提供数据压缩用的函式库
*/
/* var fs=require("fs");
var zlib=require("zlib");

fs.createReadStream("input.txt")
  .pipe(zlib.createGzip()) 
  .pipe(fs.createWriteStream("input.txt.gz"));
  
console.log("文件压缩完成"); */

/*
解压文件
*/
/* var fs=require("fs");
var zlib=require("zlib");

fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));
  
console.log("文件解压完成"); */