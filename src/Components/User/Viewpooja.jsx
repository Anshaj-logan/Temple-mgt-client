import React from 'react'

const Viewpooja = () => {
  return (
    <>
    <div id="acchero" style={{ background:"#001714"
}} >
  <section id="book-a-table" className="book-a-table">
    <div className="container">
    <div className="section-title">
      <h2>
        <br/><br/> <span>Pooja</span>
      </h2>
    </div>
    <form
      action="forms/book-a-table.php"
      method="post"
      role="form"
      className="php-email-form">
    <select name="make">
      <option data-count={2} value="Alfa Romeo">
        Alfa Romeo
      </option>
      <option data-count={23} value="Audi">
        Audi
      </option>
      <option data-count={433} value="BMW">
        BMW
      </option>
      <option data-count={45} value="Chrysler">
        Chrysler
      </option>
      <option data-count={476} value="Citroen">
        Citroen
      </option>
      <option data-count={78} value="Dodge">
        Dodge
      </option>
      <option data-count={123} value="Fiat">
        Fiat
      </option>
      <option data-count={32} value="Ford">
        Ford
      </option>
      <option data-count={3} value="Honda">
        Honda
      </option>
      <option data-count={342} value="Hyundai">
        Hyundai
      </option>
      <option data-count={45} value="Isuzu">
        Isuzu
      </option>
      <option data-count={653} value="Jaguar">
        Jaguar
      </option>
      <option data-count={3} value="Jeep">
        Jeep
      </option>
      <option data-count={23} value="Kia">
        Kia
      </option>
      <option data-count={5656} value="Lamborghini">
        Lamborghini
      </option>
      <option data-count={2133} value="Land Rover">
        Land Rover
      </option>
      <option data-count={2} value="Lexus">
        Lexus
      </option>
      <option data-count={43} value="Lotus">
        Lotus
      </option>
      <option data-count={54} value="Maserati">
        Maserati
      </option>
      <option data-count={5} value="Mazda">
        Mazda
      </option>
      <option data-count={1} value="Mercedes-Benz">
        Mercedes-Benz
      </option>
      <option data-count={34} value="Mini">
        Mini
      </option>
      <option data-count={23} value="Mitsubishi">
        Mitsubishi
      </option>
      <option data-count={56} value="Nissan">
        Nissan
      </option>
      <option data-count={98} value="Peugeot">
        Peugeot
      </option>
      <option data-count={210} value="Porsche">
        Porsche
      </option>
      <option data-count={3} value="Renault">
        Renault
      </option>
      <option data-count={76} value="Saab">
        Saab
      </option>
      <option data-count={45} value="Skoda">
        Skoda
      </option>
      <option data-count={3} value="smart">
        smart
      </option>
      <option data-count={23} value="Subaru">
        Subaru
      </option>
      <option data-count={7} value="Suzuki">
        Suzuki
      </option>
      <option data-count={45} value="Toyota">
        Toyota
      </option>
      <option data-count={23} value="Volkswagen">
        Volkswagen
      </option>
      <option data-count={6} value="Volvo">
        Volvo
      </option>
    </select>
    <input type="Book" />
  </form>
  </div>
</section>
    </div>
    </>
  )
}

export default Viewpooja