function summin(){
    var arr = [1,2,5,3,4];
    var max = 0;

    //lặp qua arr tìm phần tử lớn nhất của mảng
    for (var i = 0; i <= arr.length; i++) {
        if(i > max){
            var max = i;
        }
    }
    //tìm vị trí index của phần tử lớn nhất 
    const removeIndex = arr.findIndex((item) => item === max);
    //xóa phần tử lớn nhất trong mảng
    arr.splice(removeIndex, 1);
    
    //tính tổng 4 phần tử nhỏ nhất của mảng
    var result = arr.reduce((a, b)=>{
        return a + b;
    })

    //kết quả = 10
    console.log('the result of the smallest sum:', result);
    
    document.write('Tổng nhỏ nhất là:'+ result + '----'); 

    return result;

}
summin()

function summax(){
    var array = [10,20,50,30,40];
    //sắp xếp phần tử từ bé đến lớn
    array.sort(function(a, b){return a - b});
    //xóa phần tử đầu tiên của mảng
    array.shift()
    //tính tổng các phần tử trong mảng
    var sum = array.reduce((a, b)=>{
        return a + b;
    })

    document.write('Tổng lớn nhất là:', sum);
    console.log('the result of the largest sum:', sum);


    return sum

}

summax()

