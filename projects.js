function showPage(pageName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
  }

  const instaSova = `
  f2::
    Click, 1083, 930
    Sleep, 200
    Click, 950, 813
  return
  `
  //add coordinates and clicks
  const instaJett = `
  f2::
    Click, 831, 925
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaSage = `
  f2::
    Click, 997, 920
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaSkye = `
  f2::
    Click, 1117, 1015
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaHarbor = `
  f2::
    Click, 585, 1007
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaChamber = `
  f2::
    Click, 748, 929
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaRaze = `
  f2::
    Click, 1000, 1000
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaPhoenix = `
  f2::
    Click, 920, 920
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaOmen = `
  f2::
    Click, 915, 1010
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaReyna = `
  f2::
    Click, 1086, 1015
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaNeon = `
  f2::
    Click, 825, 1015
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaFade = `
  f2::
    Click, 1337, 925
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaBreach = `
  f2::
    Click, 571, 921
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaBrimstone = `
  f2::
    Click, 661, 930
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaAstra = `
  f2::
    Click, 1171, 928
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaKilljoy = `
  f2::
    Click, 740, 1015
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaViper = `
  f2::
    Click, 1253, 1015
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaYoru = `
  f2::
    Click, 1337, 1015
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaKayo = `
  f2::
    Click, 668, 1015
    Sleep, 200
    Click, 950, 813
  return
  `
  const instaCypher = `
  f2::
    Click, 1252, 928
    Sleep, 200
    Click, 950, 813
  return
  `
  
  
  
  const vandalHeavy = `
  f3::
    Send, b
    Sleep, 300
    Click, 908, 660
    Sleep, 300
    Click, 1443, 600
    Sleep, 100
    Send, {Escape}
  return
  `
  
  const instaGG = `
  f4:: 
    Send, {Shift+Enter}
    Sleep, 50
    Send, g
    Sleep, 50
    Send, g
    Sleep, 100
    Send, {Enter}
  return
  `
  const instaEz = `
  f5::
    Send, {Shift+Enter}
    Sleep, 50
    Send, e
    Sleep, 50
    Send, z
    Sleep, 100
    Send, {Enter}
  return
  `
  const fullUtilRegular = `
  f6::
  return
  `
  const fullUtilChamber = `
  f7::
  return
  `
  

  //assassins guild thing
//missing: classic, overkill, stealth, supercharged
  const outcomeMap = { //  'Attacker-Victim': 'Outcome',
'Oxford-Oxford': 'Victim respawns in 24 hours',
'Oxford-Evasive': 'Evasive shield DOES NOT negate death.',
'Oxford-Poison': 'Normal death',
'Oxford-Troll': 'Normal death',
'Oxford-Battery': 'Attacker becomes Supercharged, If Battery shield has not been used that game, Victim does not die',
'Oxford-Radioactive': 'Radioactive dies, Oxford gets "Radiation Sickness" for one week (same as being a Poison)',
'Oxford-Solar': 'Normal death',
'Oxford-Electromagnet': '',
'Oxford-Classic': 'Normal Death',
'Oxford-Overkill': 'Normal Death',
'Oxford-Stealth': 'Normal Death',
'Oxford-Supercharged': 'Normal Death',

'Evasive-Oxford': 'Invalid, Evasive cannot pin',
'Evasive-Evasive': 'Invalid, Evasive cannot pin',
'Evasive-Poison': 'Invalid, Evasive cannot pin',
'Evasive-Troll': 'Invalid, Evasive cannot pin',
'Evasive-Battery': 'Invalid, Evasive cannot pin',
'Evasive-Radioactive': 'Invalid, Evasive cannot pin',
'Evasive-Solar': 'Invalid, Evasive cannot pin',
'Evasive-Electromagnet': 'Invalid, Evasive cannot pin',
'Evasive-Classic': 'Invalid, Evasive cannot pin',
'Evasive-Overkill': 'Invalid, Evasive cannot pin',
'Evasive-Stealth': 'Invalid, Evasive cannot pin',
'Evasive-Supercharged': 'Invalid, Evasive cannot pin',

'Poison-Oxford': 'Oxford is poisoned and will die after 2 days (can still pin, be pinned etc)',
'Poison-Evasive': 'Evasive shield negates death after the 2 day poison timer ends',
'Poison-Poison': 'Victim is poisoned and will die after 2 days',
'Poison-Troll': 'Victim is poisoned and will die after 2 days',
'Poison-Battery': 'Attacker becomes Supercharged, Battery shield negates if available, Battery is poisoned and will die after 2 days if not',
'Poison-Radioactive': 'Radioactive is poisoned and will die after 2 days',
'Poison-Solar': 'Solar is poisoned and will die after 2 days',
'Poison-Electromagnet': 'Electromagnet is poisoned and will die after 2 days',
'Poison-Classic': 'Classic is poisoned and will die after 2 days',
'Poison-Overkill': 'Overkill is poisoned and will die after 2 days',
'Poison-Stealth': 'Stealth is poisoned and will die after 2 days',
'Poison-Supercharged': 'Supercharged is poisoned and will die after 2 days',

'Troll-Oxford': 'Victim is trolled ',
'Troll-Evasive': 'Victim is trolled, shield DOES NOT negate',
'Troll-Poison': 'Victim is trolled',
'Troll-Troll': 'Victim is trolled',
'Troll-Battery': 'Victim is trolled, Battery shield negates if available,',
'Troll-Radioactive': 'Victim is trolled, Troll recieves radiation sickness for one week',
'Troll-Solar': 'Victim is trolled',
'Troll-Electromagnet': 'Victim is trolled',
'Troll-Classic': 'Victim is trolled',
'Troll-Overkill': 'Victim is trolled',
'Troll-Stealth': 'Victim is trolled',
'Troll-Supercharged': 'Victim is trolled',

'Battery-Oxford': 'Normal Death',
'Battery-Evasive': 'Shield negates death if available. If shield negates, attacker has immunity for the rest of the day.',
'Battery-Poison': 'Normal Death',
'Battery-Troll': 'Normal Death',
'Battery-Battery': 'Attacker becomes Supercharged',
'Battery-Radioactive': 'Battery recieves radiation sickness for one week',
'Battery-Solar': 'Normal Death',
'Battery-Electromagnet': 'Normal Death',
'Battery-Classic': 'Normal Death',
'Battery-Overkill': 'Normal Death',
'Battery-Stealth': 'Normal Death',
'Battery-Supercharged': 'Normal Death',

'Radioactive-Oxford': 'Both Die',
'Radioactive-Evasive': 'Radioactive dies, Evasive dies if shield has been used',
'Radioactive-Poison': 'Both Die',
'Radioactive-Troll': 'Both Die',
'Radioactive-Battery': 'Radioactive dies, Battery dies if shield has been used',
'Radioactive-Radioactive': 'Both Die',
'Radioactive-Solar': 'Both Die',
'Radioactive-Electromagnet': 'Both Die',
'Radioactive-Classic': 'Both Die',
'Radioactive-Overkill': 'Both Die',
'Radioactive-Stealth': 'Both Die',
'Radioactive-Supercharged': 'Both Die',

'Solar-Oxford': 'Oxford dies',
'Solar-Evasive': 'Evasive shield negates if available',
'Solar-Poison': 'Poison Dies',
'Solar-Troll': 'Troll Dies',
'Solar-Battery': 'Battery shield negates if available, Solar gains charge instead of becoming Supercharged',
'Solar-Radioactive': 'Radioactive dies, Solar gets radiation sickness for one week',
'Solar-Solar': 'Victim Dies',
'Solar-Electromagnet': 'Electromagnet Dies',
'Solar-Classic': 'Classic dies',
'Solar-Overkill': 'Overkill Dies',
'Solar-Stealth': 'Stealth Dies',
'Solar-Supercharged': 'Supercharged Dies',

'Electromagnet-Oxford': 'Electromagnet is assigned a new target class, Oxford dies',
'Electromagnet-Evasive': 'Electromagnet is assigned a new target class, Evasive shield negates if available',
'Electromagnet-Poison': 'Electromagnet is assigned a new target class, Poison Dies',
'Electromagnet-Troll': 'Electromagnet is assigned a new target class, Troll dies',
'Electromagnet-Battery': 'Electromagnet becomes Supercharged, Battery shield negates if available',
'Electromagnet-Radioactive': 'Electromagnet is assigned a new target class and is given radiation sickness for one week, Radioactive dies',
'Electromagnet-Solar': 'Electromagnet is assigned a new target class, Solar dies',
'Electromagnet-Electromagnet': 'attacker is assigned a new target class, victim dies',
'Electromagnet-Classic': 'Electromagnet is assigned a new target class, Classic dies',
'Electromagnet-Overkill': 'Electromagnet is assigned a new target class, Overkill Dies',
'Electromagnet-Stealth': 'Electromagnet is assigned a new target class, Stealth Dies',
'Electromagnet-Supercharged': 'Electromagnet is assigned a new target class, Supercharged Dies',

'Classic-Oxford': 'Oxford dies',
'Classic-Evasive': 'Evasive shield negates if available',
'Classic-Poison': 'Poison Dies',
'Classic-Troll': 'Troll dies',
'Classic-Battery': 'Battery shield negates if available',
'Classic-Radioactive': 'Classic is given radiation sickness for one week, Radioactive dies',
'Classic-Solar': 'Solar dies',
'Classic-Electromagnet': 'Electromagnet Dies',
'Classic-Classic': 'Victim Dies',
'Classic-Overkill': 'Overkill Dies',
'Classic-Stealth': 'Stealth Dies',
'Classic-Supercharged': 'Supercharged Dies',

'Overkill-Oxford': 'Oxford dies',
'Overkill-Evasive': 'Evasive shield negates if available',
'Overkill-Poison': 'Poison Dies',
'Overkill-Troll': 'Troll dies',
'Overkill-Battery': 'Battery shield negates if available',
'Overkill-Radioactive': 'Overkill is given radiation sickness for one week, Radioactive dies',
'Overkill-Solar': 'Solar dies',
'Overkill-Electromagnet': 'Electromagnet Dies',
'Overkill-Classic': 'Classic Dies',
'Overkill-Overkill': 'Victim Dies',
'Overkill-Stealth': 'Stealth Dies',
'Overkill-Supercharged': 'Supercharged Dies',

'Stealth-Oxford': 'Oxford dies',
'Stealth-Evasive': 'Evasive shield negates if available',
'Stealth-Poison': 'Poison Dies',
'Stealth-Troll': 'Troll dies',
'Stealth-Battery': 'Battery shield negates if available',
'Stealth-Radioactive': 'Overkill is given radiation sickness for one week, Radioactive dies',
'Stealth-Solar': 'Solar dies',
'Stealth-Electromagnet': 'Electromagnet Dies',
'Stealth-Classic': 'Classic Dies',
'Stealth-Overkill': 'Overkill Dies',
'Stealth-Stealth': 'Victim Dies',
'Stealth-Supercharged': 'Supercharged Dies',

'Supercharged-Oxford': 'Oxford dies',
'Supercharged-Evasive': 'Evasive shield negates if available',
'Supercharged-Poison': 'Poison Dies',
'Supercharged-Troll': 'Troll dies',
'Supercharged-Battery': 'Battery shield negates if available',
'Supercharged-Radioactive': 'Supercharged is given radiation sickness for one week, Radioactive dies',
'Supercharged-Solar': 'Solar dies',
'Supercharged-Electromagnet': 'Electromagnet Dies',
'Supercharged-Classic': 'Classic Dies',
'Supercharged-Overkill': 'Overkill Dies',
'Supercharged-Stealth': 'Stealth Dies',
'Supercharged-Supercharged': 'Victim Dies',
  };
  
  const attackerSel = document.querySelector('#attackerSel');
  const victimSel = document.querySelector('#victimSel');
  const outcomeEle = document.querySelector('#outcome');
  
  function checkSelection() {
    const attackerClass = attackerSel.value;
    const victimClass = victimSel.value;
    outcomeEle.textContent = outcomeMap[attackerClass + '-' + victimClass] || 'Invalid';
  }
  
  attackerSel.addEventListener('change', checkSelection);
  victimSel.addEventListener('change', checkSelection);

  function troll(arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  var arr = ['Oxford', 'Evasive', 'Poison', 'Battery', 'Radioactive', 'Solar', 'Electromagnet', "Classic", "Overkill", "Stealth", "Supercharged", "Troll" ];
  var newClass = troll(arr);
  var button = document.querySelector('#randomTroll');
  button.addEventListener('click', function() {
    var newClass = troll(arr);
    document.querySelector('#newClass').innerHTML = newClass
  });
  let strings = {
    string1: instaSova,
    string2: instaJett,
    string3: instaSage,
	string4: instaSkye,
	string5: instaHarbor,
	string6: instaChamber,
	string7: instaRaze,
	string8: instaPhoenix,
	string9: instaOmen,
	string10: instaReyna,
	string11: instaNeon,
	string12: instaFade,
	string13: instaBreach,
	string14: instaBrimstone,
	string15: instaKilljoy,
	string16: instaViper,
	string17: instaYoru,
	string18: instaKayo,
	string19: instaCypher,
	string20: instaFade,
    string21: vandalHeavy,
};
$('#append-button').on('click', function() {
    $('#output').empty(); // clear the contents of the "output" div
    let selectedString = '';
    $('input[type=checkbox]:checked').each(function() {
        selectedString += strings[$(this).val()];
    });
    $('#output').append(selectedString);
});

let bhop =  document.getElementById("bhop");
bhop.addEventListener('click', showModal);
function showModal() {
	document.getElementById('id01').style.display='block'
}

const copyButton = document.querySelector('#copyButton');
const codeCopy = document.querySelector('#output');


copyButton.addEventListener('click', async function() {
    if(codeCopy.innerText.length == 0) {
        alert("Nothing Generated! Select some checkboxes and press 'Generate Script' first.");
    } else {

  try {
    await navigator.clipboard.writeText(codeCopy.innerText);
    alert("Script copied! Paste into a new AHK document.");
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}
});
const copyBhop = document.querySelector("#bhop");
const bhopCopy = `
F1::                 
	Suspend
	Return
*space::
	Loop                                                                                                                
	{
		GetKeyState,state,space,P
		If state = U
			Break
		Send,{space}              
		Sleep,20
	}  
`
copyBhop.addEventListener('click', async function() {
  try {
    await navigator.clipboard.writeText(bhopCopy.innerText);
    alert("Script copied! Paste into a new AHK document.");
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
});

$.fn.extend({
  toggleText: function(a, b){
      return this.text(this.text() == b ? a : b);
  }
});

$("#togInst").click(function(){
  $("#inst").toggle();
$("#togInst").toggleText('Show INSTRUCTIONS.md', 'Hide INSTRUCTIONS.md');
        });
