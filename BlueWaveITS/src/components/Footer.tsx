function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>BlueWave IT Solutions</span>
        <span>&copy; {year} BlueWave IT Solutions. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
