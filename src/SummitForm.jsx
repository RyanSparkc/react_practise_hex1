import { useState } from "react";

function SummitForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAgree: false,
    checkList: []
  })

  const handleChange = (e) => {
    const { name, value, type, checked, id } = e.target;
    if (type === 'checkbox') {
      if (id === 'isAgree') {
        setFormData({ ...formData, [name]: checked });
      } else {
        if (checked) {
          setFormData({ ...formData, checkList: [...formData.checkList, id] });
        } else {
          setFormData({ ...formData, checkList: formData.checkList.filter(item => item !== id) });
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <div>
      <h1>SummitForm</h1>
      {JSON.stringify(formData)}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>

        <div>
          <input type="checkbox" id="isAgree" name="isAgree" checked={formData.isAgree} onChange={handleChange} />
          <label htmlFor="isAgree">我同意註冊會員</label>
        </div> 
        <hr />
        多選 checkbox
        <div>
          <input type="checkbox" id="check1" name="check1" checked={formData.checkList.includes('check1')} onChange={handleChange} />
          <label htmlFor="check1">Check 1</label>

          <input type="checkbox" id="check2" name="check2" checked={formData.checkList.includes('check2')} onChange={handleChange} />
          <label htmlFor="check2">Check 2</label>

          <input type="checkbox" id="check3" name="check3" checked={formData.checkList.includes('check3')} onChange={handleChange} />
          <label htmlFor="check3">Check 3</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SummitForm;