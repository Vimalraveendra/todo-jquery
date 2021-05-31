let id=0;
let editItem= false;

$(document).ready(function(){

    $('#btn').on('click',addItem)

})

function addItem(){
    let value = $('#input').val()
    if(value.length>0){
        if(editItem){

        }else{
       let item = $(`<div class='right'></div>`)
       let edit =$(`<i class="far fa-edit"></i>`)
       let del =$(`<i class="fas fa-trash-alt"></i>`)
       item.append(edit,del)

       // adding a edit action event to the edit icon
       edit.on('click',editTodo)
       
       // adding delete action event to the delete Icon
        del.on('click',deleteTodo)

       let Li =$(`<li>${value}</li>`)
       Li.append(item)

       // setting id attribute to each list item
       Li.attr("id",id  )

       // setting a toggleClass to each list item
        Li.on('click',lineThrough)

     
        $('.list').append(Li)
        $('#input').val("");    
    }
}
    id++;
}

function deleteTodo(){
    $(this).parent().parent().remove();
}

function lineThrough(){
    $(this).toggleClass('done')
}


function editTodo(){
    let newValue= $(this).parent().parent().text();
    $("#input").val(newValue).focus(); 

}