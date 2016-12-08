export default (app) => {
  app.get('/', (req, res)=>{
    res.render('index')
  })

  app.get('*', (req, res)=>{
    res.send('error : ' + res.statusCode )
  })
}
