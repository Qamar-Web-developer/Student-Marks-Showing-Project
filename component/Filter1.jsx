import React from 'react'

export default function Filter({ setQuery1 }) {
  return (
    <>
      <select className="filter-by-region" onChange={(e) => setQuery1(e.target.value)}>
        <option hidden>Input Year</option>
        <option value="FA15">FA15</option>
        <option value="FA16">FA16</option>
        <option value="FA17">FA17</option>
        <option value="FA18">FA18</option>
        <option value="FA19">FA19</option>
        <option value="FA20">FA20</option>
        <option value="FA21">FA21</option>
        <option value="FA22">FA22</option>
        <option value="FA23">FA23</option>
        <option value="FA24">FA24</option>
        <option value="FA25">FA25</option>
        <option value="IN22">IN22</option>
        <option value="IN23">IN23</option>
        <option value="IN24">IN24</option>
        <option value="SE18">SE18</option>
        <option value="SE19">SE19</option>
        <option value="SE20">SE20</option>
        <option value="SE21">SE21</option>
        <option value="SE22">SE22</option>
        <option value="SE23">SE23</option>
        <option value="SE24">SE24</option>
        <option value="SE25">SE25</option>
        <option value="SP16">SP16</option>
        <option value="SP17">SP17</option>
        <option value="SP18">SP18</option>
        <option value="SP19">SP19</option>
        <option value="SP20">SP20</option>
        <option value="SP21">SP21</option>
        <option value="SP22">SP22</option>
        <option value="SP23">SP23</option>
        <option value="SP24">SP24</option>
        <option value="SP25">SP25</option>
        <option value="SP26">SP26</option>
        <option value="SU16">SU16</option>
        <option value="SU17">SU17</option>
        <option value="SU18">SU18</option>
        <option value="SU19">SU19</option>
        <option value="SU20">SU20</option>
        <option value="SU21">SU21</option>
        <option value="SU22">SU22</option>
        <option value="SU24">SU24</option>
        <option value="SU25">SE25</option>
      </select>
    </>


  )
}
