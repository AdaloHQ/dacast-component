let loaderPromise = null

export const getDacast = () => {
  if (loaderPromise) { return loaderPromise }

  loaderPromise = new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = 'https://player.dacast.com/js/player.js'

    script.addEventListener('load', () => {
      resolve(window.dacast)
    })

    script.addEventListener('error', err => {
      console.log('ERROR: DID NOT LOAD DACAST!!!', err)
      reject(err)
    })

    document.body.appendChild(script)
  })

  return loaderPromise
}
