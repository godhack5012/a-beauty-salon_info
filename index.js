function btn1(){
    document.getElementById('panel01').style.display='';
    document.getElementById('panel02').style.display='none';
    document.getElementById('panel03').style.display='none';
    document.getElementById('btn01').style.color='red';
    document.getElementById('btn01').style.borderBottom='1px solid red'
    document.getElementById('btn02').style.color='#000000';
    document.getElementById('btn02').style.borderBottom='0px'
    document.getElementById('btn03').style.color='#000000';
    document.getElementById('btn03').style.borderBottom='0px'
}
function btn2(){
    document.getElementById('panel01').style.display='none';
    document.getElementById('panel02').style.display='';
    document.getElementById('panel03').style.display='none';
    document.getElementById('btn01').style.color='#000000';
    document.getElementById('btn01').style.borderBottom=''
    document.getElementById('btn02').style.color='red';
    document.getElementById('btn02').style.borderBottom='1px solid red'
    document.getElementById('btn03').style.color='#000000';
    document.getElementById('btn03').style.borderBottom=''
}
function btn3(){
    document.getElementById('panel01').style.display='none';
    document.getElementById('panel02').style.display='none';
    document.getElementById('panel03').style.display='';
    document.getElementById('btn01').style.color='#000000';
    document.getElementById('btn01').style.borderBottom=''
    document.getElementById('btn02').style.color='#000000';
    document.getElementById('btn02').style.borderBottom=''
    document.getElementById('btn03').style.color='red';
    document.getElementById('btn03').style.borderBottom='1px solid red'
}

btn1();

var count = 0;
var r_count = 1;

function reviewbtc(){

    count++;
    var ids = "li_" + count;

    var comment = document.getElementById("textarea").value;

    var value = $(textarea).val();
    var max = 100; // 최대 댓글 글자 수
    var length = value.length; // 현재 댓글 길이
    var rows = value.split('\n').length; // 줄바꿈 개수
    var maxrows = 3; // 최대 줄바꿈 개수

    if(!comment || comment.trim()=="" || rows > maxrows || length > max)
    alert('다시 적어주세요.');
        else{

        var reviewli = document.getElementById('review_ul');
        var crli = document.createElement('li');
        crli.id = ids;
        crli.setAttribute('class', 'review_text');
        document.getElementById('review_ul').appendChild(crli);

        var crp = document.createElement('p');
        crp.innerText = '2020.05.08 _ 현규헤어샵';
        document.getElementById(ids).appendChild(crp);

        var crimg = document.createElement("IMG");
        crimg.src = './user.png';
        crimg.setAttribute('alt', '프로필사진');
        document.getElementById(ids).appendChild(crimg);

        var crsp = document.createElement('span');
        crsp.innerText = comment;
        document.getElementById(ids).appendChild(crsp);
        }


        var ct = document.getElementById('review_count');
        r_count++;
        ct.innerText = r_count;
        /*
        if(length > max){
            alert(max+'자 이상 쓸 수 없습니다.');
            $(textarea).val(value.substr(0, max-1));
        }
        else if( rows > maxRows){
            alert('3줄 까지만 가능합니다.');
            var Text = value.split("\n").slice(0, maxRows);
            $(textarea).val(Text.join("\n"));
        }
        */
    }