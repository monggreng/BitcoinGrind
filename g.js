var currentURL=location.href;
var str = currentURL;
var reff = str.replace("&m=1", "");
var nekokiboufaucet2 = reff.replace("https://nekofaucet.blogspot.com/p/bitcoin.html?ref=", "");
 if (nekokiboufaucet2 != "") {
    var nekokiboufaucet = "DJw11iJsnf65V6LFAP2t8qK6qB9XyUMSpu";
} else {
var nekokiboufaucet = reff.replace("https://nekofaucet.blogspot.com/p/bitcoin.html?ref=", "");
    }
  }
var s=[
"http://www.shibe.win/DJw11iJsnf65V6LFAP2t8qK6qB9XyUMSpu",
"http://freedoge.co.in/?r=1689341",
"http://dogecoin.alekscoin.com/?r="+nekokiboufaucet+"",
"http://digitask.ru/?r="+nekokiboufaucet+"",
"http://coinpot.win/ref/92776",
"http://alinafaucet.win/doge/?r="+nekokiboufaucet+"",
"http://freebcc.org/doge/?r="+nekokiboufaucet+"",
"http://btcleets.xyz/doge/doge/?r="+nekokiboufaucet+"",
"http://cryptoclaimer.website/doge/?r="+nekokiboufaucet+"",
"http://claimbit.top/doge/doge/?r="+nekokiboufaucet+"",
"http://furturebitearnmore.xyz/doge?r="+nekokiboufaucet+"",
"http://pdfaucet.xyz/doge/?r="+nekokiboufaucet+"",
"http://btc-list.com/?ref=DJw11iJsnf65V6LFAP2t8qK6qB9XyUMSpu",
"http://faucetbit.club/Doge/?r="+nekokiboufaucet+"",
"http://btcleets.xyz/doge/doge/?r="+nekokiboufaucet+""
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('DJw11iJsnf65V6LFAP2t8qK6qB9XyUMSpu');
s=s.map(function(x){
  return x.indexOf("?r=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
