QUnit.test( "classes", function( assert ) {
  saas = new tws();
  movie = new Movie();
  user = new User();
  photolink = new Photolink();
  tagCanvas = new TagCanvas();
  mockPlayer = new MockPlayer();
  assert.ok( 1 == "1", "Classes loaded!" );
});

/*
QUnit.asyncTest( "getPhotolinkJQ", function( assert ) {
	assert.expect( 1 );
	saas = new tws('http://52.3.72.192:3000');
	ajax = saas.getPhotolinkJQ();
        console.log(ajax);
        ajax.always(function(m) {
            console.log(ajax.statusText);
            assert.ok(ajax.statusText != 'error',"Received some response");
        });
});
*/

QUnit.asyncTest( "getPhotolink", function( assert ) {
	assert.expect( 1 );
	saas = new tws('http://52.3.72.192:3000');
	var phData = "{'error':'unknown'}";
	lp = saas.getPhotolink();
	console.log('Getting photolink from '+ saas.url);
	lp.onData = function(data) {
	    phData = data;
	    console.log(phData);
            jsData = JSON.parse(phData);
	    assert.ok( jsData.extradata == 'blablabla', "Received a photolink: "+ jsData.extradata);
	};
	lp.connect();
	console.log(lp);
        setTimeout(function(){

//////////////////////////////////////////////////////////////
        var xhr = new XMLHttpRequest();
        var headers =  {"X-Api-Key": 123, "X-Auth-Key": "395fb7b657db2fb5656f34de3840e73c90b79c31"}; 
        xhr.open('POST', 'http://52.3.72.192:3000/app/photolink/send/0/0', true);
        for(var key in headers) {
                xhr.setRequestHeader(key, headers[key]);
        }

        xhr.send('{"extradata": "blablabla"}');

/////////////////////////////////////////////////////////////
/*
$.ajaxSetup({
  headers : {
    'X-API-Key':'1234',
    'X-Auth-Key': '4574eb62ff5337ce17f3d657f3b74cbcf3f9cc42', 
  },
  type: "POST",
  url: "http://52.3.72.192:3000/app/photolink/send/0/0",
});
$.ajax({ data:'{"extradata": "blablabla"}' });
*/
/////////////////////////////////////////////////////////////

        }, 2000);
});
