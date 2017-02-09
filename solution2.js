function fizzBuzz(a,b,c){
 	if(a%3===0){
 		return a
 	}
 	if (b%5===0){
 		return b
 	}
 	if(c%3&&c%5===0){
 		return c
 	}
 	if(a%3 ||a%5!===0){
 		return a
 	}
 	if (b%5 || b%3 !===0){
 		return b
 	}
 	if(c%3 || c%5!===0){
 		return c
 	}

 } 
 