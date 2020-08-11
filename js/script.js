var nim = ["190312617652","180421621568","I0117011","1715022094","Acc117009","412726","1704211000051","195090300111004","1906077","41032121181022","E1b017024"
,"195040101111051","0102-12-8-1823-170","M0219019","180151602192","195050100111008","C1180292","C1180304","195223007","190431100049","190342621216","180121600525","20118008"
,"193401088","426779","6032982204919340","5520118042","23010119130122","1805943","26030119130032"];

var isi_nim = document.getElementById("nim").value;
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
	window.open("https://anjarmath.github.io/sertif-essai/"+isi_nim+".zip");
}
