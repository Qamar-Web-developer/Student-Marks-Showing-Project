import React from 'react'

export default function Filter({ setQuery2 }) {
  return (
    <>
      <select className="filter-by-region" onChange={(e) => setQuery2(e.target.value)}>
        <option hidden>Filter by Region</option>
        <option value="A09">A09</option>
        <option value="A10">A10</option>
        <option value="A16">A16</option>
        <option value="ADE">ADE</option>
        <option value="B">B</option>
        <option value="B.A">B.A</option>
        <option value="B01">B01</option>
        <option value="B04">B04</option>
        <option value="B05">B05</option>
        <option value="B06">B06</option>
        <option value="B11">B11</option>
        <option value="B14">B14</option>
        <option value="B2D">B2D</option>
        <option value="B43">B43</option>
        <option value="BAF">BAF</option>
        <option value="BAH">BAH</option>
        <option value="BAI">BAI</option>
        <option value="BAS">BAS</option>
        <option value="BAT">BAT</option>
        <option value="BBA">BBA</option>
        <option value="BBT">BBT</option>
        <option value="BCH">BCH</option>
        <option value="BCM">BCM</option>
        <option value="BCS">BCS</option>
        <option value="BCT">BCT</option>
        <option value="BCV">BCV</option>
        <option value="BEC">BEC</option>
        <option value="BED">BED</option>
        <option value="BEE">BEE</option>
        <option value="BFA">BFA</option>
        <option value="BFD">BFD</option>
        <option value="BFT">BFT</option>
        <option value="BHE">BHE</option>
        <option value="BHM">BHM</option>
        <option value="BHN">BHN</option>
        <option value="BHS">BHS</option>
        <option value="BIR">BIR</option>
        <option value="BIS">BIS</option>
        <option value="BIT">BIT</option>
        <option value="BMB">BMB</option>
        <option value="BMC">BMC</option>
        <option value="BME">BME</option>
        <option value="BMT">BMT</option>
        <option value="BPH">BPH</option>
        <option value="BPS">BPS</option>
        <option value="BSE">BSE</option>
        <option value="BSM">BSM</option>
        <option value="BST">BST</option>
        <option value="BSY">BSY</option>
        <option value="BTH">BTH</option>
        <option value="BTY">BTY</option>
        <option value="BZO">BZO</option>
        <option value="C04">C04</option>
        <option value="C05">C05</option>
        <option value="C06">C06</option>
        <option value="C08">C08</option>
        <option value="C11">C11</option>
        <option value="CSE">CSE</option>
        <option value="D02">D02</option>
        <option value="D43">D43</option>
        <option value="DLA">DLA</option>
        <option value="DOP">DOP</option>
        <option value="DPH">DPH</option>
        <option value="DPT">DPT</option>
        <option value="DVM">DVM</option>
        <option value="E01">E01</option>
        <option value="E06">E06</option>
        <option value="E11">E11</option>
        <option value="E14">E14</option>
        <option value="E15">E15</option>
        <option value="E18">E18</option>
        <option value="E24">E24</option>
        <option value="E43">E43</option>
      </select>
    </>


  )
}