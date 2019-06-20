
function get() {

$.ajax( {
    url:'http://localhost:8083/fetch',
    method:'GET',
    contentType:'application/json',
    success:function(result) {
        let rowdata ='';

        let datalenghth = result.content.length;

        for (let i = 0; i < datalenghth; i++) {

           rowdata +=`<tr class = "table-Success">
           <td>${result.content[i].id}
           <td>${result.content[i].name}</td>
           <td>${result.content[i].email}</td>
           </tr>`
        }
        document.getElementById('span').innerHTML = datalenghth
        document.getElementById('Values').innerHTML=rowdata
            console.log("data - - - > ",result)
        }
        
    });
return true;
}