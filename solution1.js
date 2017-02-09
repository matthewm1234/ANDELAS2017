function aritGeo (a) {
  var  d=a.sort()
 var	max=d[0]
 	var maxMinArray = []
 	
 	for (i=0;i<a.length;i++) {
 		if (d[i+1]>d[i]){
 			max=d[i+1]
 		}
 	}
 		maxMinArray.push(max)
 		var f=a.reverse()
 	var	min=f[0]
 		for(i=0;i<a.length;i++){
    for (i=0;i<a.length;i++) {
 		if (f[i+1]>f[i]){
 			min=d[i+1]
 		}
 	}
 	maxMinArray.push(max)
 	 	return maxMinArray
 	 	}	
 