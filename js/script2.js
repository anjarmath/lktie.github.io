var nim = ["Q1A118060","H0217033","190421628833","190741639246","17505010011102","06111281924061","170322613025","190535646012","01031181722099","190711637307"
,"B011191012","190511630818","180801025","07021281823166","180421621563","1805901030021","180711638586","170322613063","317110001","180311612555","195090201111024"
,"190141602005","175020301111010","F3219018","1805901010042","23020219130059","15317022","1011911007","D041180027","121911133139","081911233004","G011181426","185020300111079"
,"0819040041","D111181002","D1A019124","041910058","21030118120020","181510601012","919862010007","17040674062","1931310005","1911312011","175150601111012"];

function mulai(){
	var patokan = 0;
	var isi_nim = document.getElementById("nim").value;
		if (isi_nim == "")
			{
				alert("masukkan NIM anda");
			}
		else if (nim.indexOf(isi_nim)<0)
			{
				alert("NIM tidak terdaftar, pastikan NIM anda benar");
			}
		else
			{
				if (document.getElementById("submit").value == "="){
				document.getElementById("container-thanks").style.height = "0px";
				document.getElementById("container-thanks").style.width = "110px";
				document.getElementById("container-thanks").style.borderRadius = "0px 0px 100% 100%";
				
				document.getElementById("nim").disabled = false;
				
				document.getElementById("unduh").style.minHeight = "0px";
				document.getElementById("unduh").style.minWidth = "0px";
				document.getElementById("unduh").style.display = "none";
				
				document.getElementById("thanks").style.display = "none";
				document.getElementById("submit").style.width = "160px";
				document.getElementById("submit").style.margin = "0px";
				document.getElementById("submit").value = "SUBMIT";
				document.getElementById("submit").style.borderRadius = "25px";
				} else {
				document.getElementById("container-thanks").style.height = "200px";
				document.getElementById("container-thanks").style.width = "100%";
				document.getElementById("container-thanks").style.borderRadius = "0px 0px 30px 30px";
				
				document.getElementById("unduh").style.minHeight = "50px";
				document.getElementById("unduh").style.minWidth = "120px";
				document.getElementById("unduh").style.display = "block";
				
				document.getElementById("nim").disabled = true;
				
				document.getElementById("thanks").style.display = "block";
				document.getElementById("submit").style.width = "100%";
				document.getElementById("submit").value = "=";
				document.getElementById("submit").style.borderRadius = "30px 30px 0px 0px";
				}
			}
}
function unduh(){
	var isi_nim = document.getElementById("nim").value;
	window.open("https://anjarmath.github.io/"+isi_nim+".zip");
}