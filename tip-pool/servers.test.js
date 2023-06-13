describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a new server if there is a ! to allServers', function () {
    serverNameInput.value = 'Damien!';
    submitServerInfo();

    expect(Object.keys(allServers).length).toBe(1);
    expect(allServers['server' + serverId].serverName).toBe('Damien!');
  })

  it('should update the updateSeverTable() properly', function () {
    submitServerInfo();
    updateServerTable();
    let list = document.querySelectorAll('#serverTable tbody tr td')
    list[1].innerText = '$5.00'
    expect(list.length).toBe(2)
    expect(list[0].innerText).toEqual('Alice');
    expect(list[1].innerText).toEqual('$5.00');
    
  })
 
  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerText = '';
  });
});
