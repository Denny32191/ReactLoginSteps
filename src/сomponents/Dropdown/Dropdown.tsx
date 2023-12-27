function Dropdown ()  {
    return (
        <div>
        <label htmlFor="gender"></label>
        <select id="gender" value={""} >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    )
}
export default Dropdown;

