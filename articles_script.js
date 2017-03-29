    var clck=0;
	var ovrimg="submitovr.gif";
	var nrmimg="submit.gif";
	var deid = "" ;
	
	
	function dtrim(eid)
	{
		var l = 0, i = 0, j = 0,strt=0 , flag = 0;
		var cstr = "";
		var ch = "";
		
		deid = eid.value;
		l = deid.length;
		
		for(i=0,j=0;i<l;i++)
		{
		    ch = deid.substring(i,i+1);
			
			if((! (ch == ' ')) && (flag == 0))
			{
			strt = i;
			j++;
			flag = 1;
			}
			else if(! (ch == ' '))
			j++;
			
		}
		
		cstr = deid.substring(strt,strt+j);
		deid = cstr;		
		
	}
	
	function chck(eid)
	{	  
		
		dtrim(eid);
				
	    if(! ((deid == "a")||(deid == "A")||(deid == "an")||(deid == "An")||(deid == "the")||(deid == "THE")))
    	{
		eid.value=""; 
		eid.focus();
		deid = "";
		}
		
		eid.value = deid;	
		
	}
	
	function ovr(actv)
	{
	
	if(actv == 1)
	     document.article.rslt.src=ovrimg;
	else
		 document.article.rslt.src=nrmimg;
	
	}