import React from 'react'

function City (){

 return (
     <div>
    <label>City :</label>
<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
    <option selected>Choose your city</option>
    <option value="1">Tunis</option>
    <option value="2">Bizerte</option>
    <option value="3">Nabeul</option>
    <option value="3">Other</option>
</select>
</div>
 )   
}

export default City