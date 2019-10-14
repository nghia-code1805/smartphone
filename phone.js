function Phone(battery,status,draft,sent,inbox) {
    this.battery=battery; //pin
    this.status=true;   //trạng thái
    this.draft=draft;   //tn nháp
    this.sent=sent;     // tn gửi
    this.inbox=inbox;   // tn đến

    // kiểm tra trạng thái
    this.getStatus=function () {
        return this.status;
    };
    this.check=function () {
        if (this.getStatus()){
            alert("đang hoạt động")
        }else {
            alert("không hoạt động")
        }
    }

    // sạc pin
    this.changBattery=function () {
        if (this.battery<90){
            this.battery+=10;
        }
    };
    //viết tin nhắn và lưu trong nháp
    this.writeMessage=function (newMessage) {
        if (this.status){
            this.draft.push(newMessage);
            this.battery--;
        }
    };
    // soạn thư
    this.sentMessage=function (phone,sentMess) {
        this.draft=[];
        this.sent.push(sentMess);
        phone.inbox.push(sentMess);
        this.battery--;
        this.phone--;

    };
    //kiểm tra đã gửi chưa
    this.getSentMessage=function () {
        return this.sent;
        this.battery--;
    };
    //kiểm tra hòm thư đến
    this.getinboxMessage=function () {
        return this.inbox;
        this.battery--;
    };
    //kiểm tra tin nhắn nháp
    this.getdraftMessage=function () {
        return this.draft;
        this.battery--;
    }
}
var samsung=new Phone(100,true,[],[],[]);
var iphone=new Phone(100,true,[],[],[]);