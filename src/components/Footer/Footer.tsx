export default function Footer() {
  return (
    <footer className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CU</span>
            </div>
            <div>
              <h3 className="font-bold">CUConnect</h3>
              <p className="text-sm text-muted-foreground">Future of Learning</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">© 2024 CUConnect. Made with ❤️ for Chandigarh University</div>
        </div>
      </div>
    </footer>
  )
}
