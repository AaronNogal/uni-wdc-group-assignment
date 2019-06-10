function returnSearches(){
	var query = getUrlVars()["search"];
	query = query.toUpperCase();
	
	var restnames = ["RESTAURANT1", "RESTAURANT2", "RESTAURANT3"];
	var lcrestnames = ["Restaurant1", "Restaurant2", "Restaurant3"];
	



	var results =0;


	//matches search with restaurant name
	for(var i=0;i<restnames.length;i++){
		if(query==restnames[i]){
			document.getElementById(lcrestnames[i]).style.display = "block";
			results++;
		}
	}
	//checks if there are no results then displays all
	if(results==0){
		if(query!=""){
			//if searched but no matches alerts
			alert("No matches found, showing all restaurants.");
		}
		for(var i=0;i<restnames.length;i++){
			document.getElementById(lcrestnames[i]).style.display = "block";
		}
	}
}	

//--------------------------------------------------------------------------------------------------------

function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


//------------------------------------------------------------------------------------------------------
function calcNum(){
	var elementa = document.getElementById("type");
	var elementc = document.getElementById("people");
	var Anum = parseInt(elementa.options[elementa.selectedIndex].value);
	var Cnum = parseInt(elementc.options[elementc.selectedIndex].value);

	if(parseInt(Anum + Cnum) > 2 || Anum > 2){
		document.getElementById("Restaurant1").style.display = "block";
		document.getElementById("Restaurant2").style.display = "none";
		document.getElementById("Restaurant3").style.display = "block";
	
	}
	if(parseInt(Anum+Cnum) > 4){
		document.getElementById("Restaurant1").style.display = "none";
		document.getElementById("Restaurant2").style.display = "none";
		document.getElementById("Restaurant3").style.display = "block";
	}
	if(parseInt(Anum+Cnum) < 3 || Anum < 3){
		document.getElementById("Restaurant1").style.display = "block";
		document.getElementById("Restaurant2").style.display = "block";
		document.getElementById("Restaurant3").style.display = "none";
	}
}