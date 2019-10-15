/*
* Add a new Keyword input
* Input: click event
* Output: clone one element then add to keySector
*/
function addNewAKeyWord() {
  var keySector = document.getElementById("keySector")
  var countKey = keySector.childElementCount
  var currentKey = keySector.firstElementChild.cloneNode(true)
  currentKey.children[0].innerHTML ='Keyword ' + parseInt(countKey + 1)
  currentKey.children[1].children[0].value = ''
  keySector.appendChild(currentKey)
  // console.log(currentKey.children[1].children[0].value)
}

function removeAKeyWord() {
  var keySector = document.getElementById("keySector")
  var countKey = keySector.childElementCount
  var currentKey = keySector.lastElementChild
  if (countKey > 1) {
    keySector.removeChild(currentKey)
  }
}

function showContent(currentKey) {
  var parentNode = currentKey.parentNode.parentNode
  var inputTag = (parentNode.children[1].innerHTML === '<p></p>') ?
  parentNode.children[2].children[0] : parentNode.children[1].children[0]
  var type = inputTag.getAttribute("type")
  if (type === "password") {
    inputTag.setAttribute("type", "text")
  } else {
    inputTag.setAttribute("type", "password")
  }
  // console.log(inputTag)
}

function copyContent(currentNode) {
  var parentNode = currentNode.parentNode.parentNode.children[2].children[0]
  parentNode.setAttribute("type", "text")
  parentNode.select()
  document.execCommand('copy')
  parentNode.setAttribute("type", "password")
  parentNode.select()
  // console.log(parentNode)
}

function generatePassword() {
  var blockname = $("input[name='blockName']").val()
  var keyword = []
  $("input[name='keyword']").each(function() {
      keyword.push($(this).val())
  })

  $.post('passgen', {
    blockname: blockname,
    keyword: keyword
  }, (data, status) => {
    if(data.OK) {
      $("#encryptedPassword").val(data.OK.msg)
    } else {
      console.log(data.err.msg)
    }
  })
}

function letEncryptPassword(eve) {
  if (eve.keyCode === 13) {
    generatePassword()
  }
}

function submitNewBlock() {
  var blockname = $("input[name='newBlockName']").val()
  var hint = []
  $("input[name='hint']").each(function() {
      hint.push($(this).val())
  })

  $.post('blockchain', {
    blockname: blockname,
    hint: hint
  }, (data, status) => {
    if(data.OK) {
      console.log('OK')
    } else {
      var err = data.err.msg
      $("#submit-newblock-warning").text(err)
      $("#submit-newblock-warning").show(
          setTimeout(function() {
            $("#submit-newblock-warning").hide()
          }, 10000)
        )
      console.log(err)
    }
  })
}

function addOneHint(eve) {

}

function addANewHint() {
  var hintSector = document.getElementById("hintSector")
  var countKey = hintSector.childElementCount
  var currentKey = hintSector.firstElementChild.cloneNode(true)
  currentKey.children[0].innerHTML ='Hint ' + parseInt(countKey + 1 + ':')
  currentKey.children[1].children[0].value = ''
  hintSector.appendChild(currentKey)
}

function removeAHint() {
  var hintSector = document.getElementById("hintSector")
  var countKey = hintSector.childElementCount
  var currentKey = hintSector.lastElementChild
  if (countKey > 1) {
    hintSector.removeChild(currentKey)
  }
}

// Dropdown
function dropFunction(cb) {
    var x = document.getElementById("blockFilter");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
    if(typeof cb === "function") {
      cb()
    }    
}

// Filter
function filterFunction(cb) {
    var input, filter, ul, li, a, i;
    input = document.getElementById("blockname");
    filter = input.value.toUpperCase();
    div = document.getElementById("blockFilter");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
    if(typeof cb === "function") {
      cb()
    }
}

function emptyASector(id) {
  var sector = document.getElementById(id)
  var elementCount = sector.childElementCount
  console.log(elementCount)
  for (var i = elementCount - 1; i > 0; i--) {
    sector.removeChild(sector.childNodes[i])
  }
}

function selectABlockname(currentElement) {
  dropFunction()
  emptyASector('keySector')
  var choosenBlock = currentElement.innerHTML
  $("#blockname").val(choosenBlock)
  $.post('blockchain/getHintsOfABlock', 
  {
    blockname: choosenBlock
  }, (data, status) => {
    if(data.OK) {
      var hints = data.OK.msg
      var keySector = document.getElementById('keySector')
      var firstHintDiv = keySector.firstElementChild

      var firstHint = firstHintDiv.firstElementChild
      firstHint.innerHTML = 
      (choosenBlock !== 'defaultblock') ? hints[0] : 'Keyword 1'
      for(var i = 1; i < hints.length; i++) {
        var clone = firstHintDiv.cloneNode(true)
        clone.firstElementChild.innerHTML = (hints[i]) ? hints[i] : 'Keyword ' + (++i)
        keySector.appendChild(clone)
      }
    } else {
      console.log('Cannot get data from servers! Please check your internet connection!')
    }
  })
}
