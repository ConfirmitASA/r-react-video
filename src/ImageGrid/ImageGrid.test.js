import React from 'react';
import ImageGrid from './ImageGrid'

const itemsData = [
  {
  "id"         : "18",
  "title"      : "REP2229",
  "image"      : "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/A0AD3B3394FEC6C3E67BA4E634142192.jpg",
  "placeholder": "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/A0AD3B3394FEC6C3E67BA4E634142192_thumb.jpg",
  "mediatype"  : "image",
  "link"       : "https://survey.euro.confirmit.com/wix/p1855261951.aspx?__sid__=6q-sHcj7DrUW…ItTRCxx8jcHq5S9Q5teyQqV73cOClFGzpo4u7BmXkUkw7x1DeL4EI4NbpHHtiVPWddYy68nRk1"
}, {
  "id"         : "17",
  "title"      : "BLA BLA 222",
  "description": "some descr",
  "image"      : "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/A0AD3B3394FEC6C3E67BA4E634142192.jpg",
  "placeholder": "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/A0AD3B3394FEC6C3E67BA4E634142192_thumb.jpg",
  "mediatype"  : "image",
  "link"       : "https://survey.euro.confirmit.com/wix/p1855261951.aspx?__sid__=6q-sHcj7DrUW…fcpsn_lBhErylEvqpZtz5asnrkalqbSU8wIRjJ4REqd9XpztPg0w7YxaH_nnWD3VbMjzv_FCY1"
}, {
  "id"         : "16",
  "title"      : "10 Best Video Game Ending NEW TITLE",
  "description": "Not a trace of \"-and then I woke up and it was all a dream\" here.",
  "image"      : "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/4E7FE18382091B05AB181D863CDCFBBC.jpg",
  "placeholder": "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/4E7FE18382091B05AB181D863CDCFBBC_thumb.jpg",
  "mediatype"  : "image",
  "link"       : "https://survey.euro.confirmit.com/wix/p1855261951.aspx?__sid__=6q-sHcj7DrUW…JOAMFo-33DMW0UAQ45CiOnoBsRg1igbuQW6k7gIDRx0GR-KOJuwYwjRk1EQcz7VTd_db926UM1"
}, {
  "id"         : "15",
  "title"      : "11 Interesting Life Hacks That Really Can Make Life Easier",
  "description": "Let's watch another 11 new life hacks that really can make life easier. all this life hacks are working and we have all tested before putting them in this video. Let's watch another 11 new life hacks that really can make life easier. all this life hacks are working and we have all tested before putting them in this video. Let's watch another 11 new life hacks that really can make life easier. all this life hacks are working and we have all tested before putting them in this video.",
  "image"      : "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/7F9549FA8E9AB10AD0278BCDE8667DE4.jpg",
  "placeholder": "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/7F9549FA8E9AB10AD0278BCDE8667DE4_thumb.jpg",
  "mediatype"  : "image",
  "link"       : "https://survey.euro.confirmit.com/wix/p1855261951.aspx?__sid__=6q-sHcj7DrUW…5EacgebXzYpKlNoRqLvLQtbmICZ3cscrIoTtQRPg0k6Scnr2d9MR_RJnhgqhMgk7i7yBxxAyA1"
}, {
  "id"         : "14",
  "title"      : "Zool Babies As Police",
  "description": "Police Chase Thief | Zool Babies Cartoon Animation",
  "image"      : "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/DDCB5083040974ECF01DCF097059D425.jpg",
  "placeholder": "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/DDCB5083040974ECF01DCF097059D425_thumb.jpg",
  "mediatype"  : "image",
  "link"       : "https://survey.euro.confirmit.com/wix/p1855261951.aspx?__sid__=6q-sHcj7DrUW…vZ1R7nSWk1rhtXQ1_4_XQrkit7-D0iS-I89pGmhhpiKJpBwjpYKWbrrcJ_ZioTtnrRUHqj9uQ1"
}, {
  "id"         : "13",
  "title"      : "How To Create Infographics (The Ultra-Simple & Easy Way)",
  "description": "Check out the updated version of this tutorial",
  "image"      : "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/A137C51DA64AA412DA871ECBBA855BB9.jpg",
  "placeholder": "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/A137C51DA64AA412DA871ECBBA855BB9_thumb.jpg",
  "mediatype"  : "image",
  "link"       : "https://survey.euro.confirmit.com/wix/p1855261951.aspx?__sid__=6q-sHcj7DrUW…KomopsrqNOGgHZo5SF9N7AoHc3vy6IgEloCFMXxdTlOUrAahyULXXuSlQ2Rh70J86FVs-Jb5g1"
}, {
  "id"         : "12",
  "title"      : "SURPRISING And Interesting Facts About Money!",
  "description": "Check out these surprising and interesting facts about money!",
  "image"      : "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/4E7FE18382091B05AB181D863CDCFBBC.jpg",
  "placeholder": "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/4E7FE18382091B05AB181D863CDCFBBC_thumb.jpg",
  "mediatype"  : "image",
  "link"       : "https://survey.euro.confirmit.com/wix/p1855261951.aspx?__sid__=6q-sHcj7DrUW…GrsrOhy0Z85WahU9xqXgaXD6oEo71UguiIbIzbaWmQUX9kM9yhlzTwDpITgDxiuTdy3sq6iZs1"
}, {
  "id"         : "11",
  "title"      : "What are Interests Rates",
  "description": "by Wall Street Survivor",
  "image"      : "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/7F9549FA8E9AB10AD0278BCDE8667DE4.jpg",
  "placeholder": "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/7F9549FA8E9AB10AD0278BCDE8667DE4_thumb.jpg",
  "mediatype"  : "image",
  "link"       : "https://survey.euro.confirmit.com/wix/p1855261951.aspx?__sid__=6q-sHcj7DrUW…NpH4OOER9cPJGO5SWl5XfiIKdLiNKtW9wn1Tw6vS6OWw9zJGXbd8Rr5E5n_ksCLZIPrsBpswA1"
}, {
  "id"         : "10",
  "title"      : "Top 10 Interview Questions and Answers",
  "description": "Watch Now",
  "image"      : "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/DDCB5083040974ECF01DCF097059D425.jpg",
  "placeholder": "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/DDCB5083040974ECF01DCF097059D425_thumb.jpg",
  "mediatype"  : "image",
  "link"       : "https://survey.euro.confirmit.com/wix/p1855261951.aspx?__sid__=6q-sHcj7DrUW…WIdLvU6xzFOdFFHezx8WXdveSN7Hg_n8txzk8SZWm0eXCPSoQaAfueMbHjIRn7Ht93Mb9EG-I1"
}, {
  "id"         : "9",
  "title"      : "President Obama: FULL INTERVIEW",
  "description": "Real Time with Bill Maher (HBO)",
  "image"      : "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/A137C51DA64AA412DA871ECBBA855BB9.jpg",
  "placeholder": "/reportal/a-b/Report/ac911638-3da8-430f-a236-e5f67247773d/p1855261951/img/A137C51DA64AA412DA871ECBBA855BB9_thumb.jpg",
  "mediatype"  : "image",
  "link"       : "https://survey.euro.confirmit.com/wix/p1855261951.aspx?__sid__=6q-sHcj7DrUW…DFUYnbMxXlt4cehhV-wjDAYmAgpodWNP7Xes9O0XhqVTEstDxqc4jAr0bqT49UMFc9zPxn08A1"
}
]

describe('<ImageGrid />', ()=>{
  let requiredProps;
  beforeEach(()=>{
    requiredProps= {
      onSelect:()=>{},
    }
  })
  it('should render a grid',()=>{
    const wrapper = shallow(<ImageGrid {...requiredProps}/>);
    expect(wrapper).toMatchSnapshot();
  })
  it('should render a div.ImageGrid',()=>{
    const wrapper = shallow(<ImageGrid {...requiredProps}/>);
    expect(wrapper.name()).toEqual('div');
    expect(wrapper.hasClass('ImageGrid')).toEqual(true);
  })
  it('should render 12 dummy items by default',()=>{
    const wrapper = shallow(<ImageGrid {...requiredProps}/>);
    expect(wrapper.find('.ImageGrid').children().length).toEqual(12);
  })
  it('should render 5 dummy grid items',()=>{
    const wrapper = shallow(<ImageGrid dummyItems={5} {...requiredProps}/>);
    expect(wrapper.find('.ImageGrid').children().length).toEqual(5);
  })
  it('should render 12 dummy grid items when items array is empty',()=>{
    const wrapper = shallow(<ImageGrid items={[]} {...requiredProps}/>);
    expect(wrapper.find('.ImageGrid').children().length).toEqual(12);
  })
  it('should render 10 ImageGridTile elements when items are not empty',()=>{
    const wrapper = shallow(<ImageGrid items={itemsData}  dummyItems={0} {...requiredProps}/>);
    expect(wrapper.find('.ImageGrid').children().length).toEqual(10);
    expect(wrapper).toMatchSnapshot();
  })

});
