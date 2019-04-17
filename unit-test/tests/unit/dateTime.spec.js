import {parseTime} from "@/utils/date-time";

const myDate = new Date();

describe("检查parseTime函数", ()=>{

  it("传入js时间对象，应该获得正确格式化的时间", ()=>{
    expect( parseTime(myDate, '{y}-{m}-{d}') ).toBe("2019-04-17");
  });

  // it("只传入时间，应该获得正确格式化的时间", ()=>{
  //   expect( parseTime(myDate) ).toBe("2019-04-16");
  // });
});
