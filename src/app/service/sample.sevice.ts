export class SampleService{

    data = "abc"
    getData(){
return this.data;
    }
    setData(data:string){
        this.data = data;
    }
}