let user = {
  firstName: "mohammed",
  lastName: "alhamed",
  phonenumber: "0555291106",
  addresses: {
    eg: "giza",
    ksa: "jeddah",
    ch: "hangzhou",

    getMainAddress: function () {
      return `Main Address: ${user.addresses.ch}`;
    },
  },
  getfullname: () => `full name: ${user.firstName} ${user.lastName}`,
};
let obj1 = {
  1: "two",
  2: "one",
};

console.log(user.getfullname());

console.log(user.addresses.getMainAddress());

console.log(user.phonenumber);

console.log(obj1[1]);
console.log(obj1[2]);

let mainobj = {
  FreeParking: false,
  showmsg: function () {
    return `there is ${mainobj.FreeParking ? "" : "no"} parking available`;
  },
};
console.log(mainobj.FreeParking);
console.log(mainobj.showmsg());

let otherobject = Object.create(mainobj);

otherobject.FreeParking = true;

console.log(otherobject.FreeParking);
console.log(otherobject.showmsg());

let target = {
  prop5: "value",
};

Object.assign(target, obj1, { prop10: "meow" });

console.log(target);

const myobj = Object.assign({}, target);
console.log(myobj);

delete target.prop10;

console.log(target);
