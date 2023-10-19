function MenuFood() {

  const handleSuccess = () => {
    console.log('success')
  }

  const handleFail = () => {
    console.log('fail')
  }
  
  return (
    <div className="menu-food row flex-edges">
      <button 
      className="food-item btn-secondary btn-large"
      onClick={handleSuccess}
      >
          Carn
      </button>
      <button 
      className="food-item btn-danger btn-large"
      onClick={handleFail}
      >
          Poma
      </button>
    </div>
  )
}
export default MenuFood