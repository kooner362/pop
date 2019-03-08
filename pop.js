function pop(invest) {
  var bottles_count = 0;
  var initial_bottles = Math.floor(invest/2);
  bottles_count += initial_bottles;
  var bottles_to_return = initial_bottles;
  var caps_to_return = initial_bottles;
  var bottles_earned_bots = 0;
  var bottles_earned_caps = 0;
  while (bottles_to_return > 1 || caps_to_return > 3) {
    if(bottles_to_return > 1){
      var new_full =  Math.floor(bottles_to_return/2);
      bottles_count += new_full;
      bottles_to_return = (bottles_to_return % 2) + new_full;
      bottles_earned_bots += new_full;
      caps_to_return += new_full;
    }
    if(caps_to_return > 3) {
      var new_full =  Math.floor(caps_to_return/4);
      bottles_count += new_full;
      bottles_to_return += new_full;
      bottles_earned_caps += new_full;
      caps_to_return = (caps_to_return % 4) + new_full;
    }
  }
  console.log('TOTAL BOTTLES: ' + bottles_count);
  console.log('REMAINING BOTTLES: ' + bottles_to_return);
  console.log('REMAINING CAPS: ' + caps_to_return);
  console.log('TOTAL EARNED');
  console.log('  BOTTLES: ' + bottles_earned_bots);
  console.log('  CAPS: ' + bottles_earned_caps);

}

var arg = process.argv[2];
if (arg){
  pop(arg);
}
