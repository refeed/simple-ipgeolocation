const API_KEY = "getItOnipGeolocation;)"

async function getGeolocationJson(ip) {
  const res = await fetch(`https://api.ipgeolocation.io/ipgeo\?apiKey\=${API_KEY}&ip=${ip}`)
  return res.json()
}

function checkLocationBtnClicked() {
  const ip = $('#ip-input').val()
  getGeolocationJson(ip).then((geoRes) => {
    $('#geo-result').html(
      createTableResHTML(geoRes))
  })
}

function createTableResHTML(geoRes) {
  return `<article class="message is-success mt-5">
  <div class="message-header" style="text-align: center;">
    <p>Geolocation result for IP: ${geoRes.ip}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
<table class="table" style="margin-left:auto;margin-right:auto">
            <tr>
              <td>Country</td>
              <td>${geoRes.country_name}</td>
            </tr>
            <tr>
              <td>Country Capital</td>
              <td>${geoRes.country_capital}</td>
            </tr>
            <tr>
              <td>State/Province</td>
              <td>${geoRes.state_prov}</td>
            </tr>
            <tr>
              <td>District</td>
              <td>${geoRes.district}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>${geoRes.city}</td>
            </tr>
            <tr>
              <td>Zip code</td>
              <td>${geoRes.zipcode}</td>
            </tr>
            <tr>
              <td>Languages</td>
              <td>${geoRes.languages}</td>
            </tr>
          </table>
  </div>
</article>`
}
