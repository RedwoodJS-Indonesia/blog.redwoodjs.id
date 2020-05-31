import React from 'react'
import rw from './diecut_mark.png'

const HomePage = () => {
  return (
    <>
      <div className="pt-5">
        <center>
          <img
            src={rw}
            alt="Responsive image"
            style={{ height: '200px', width: '200px' }}
          />
        </center>
      </div>
      <div className="pt-4 d-flex justify-content-center">
        <h1 className="flex justify-center text-5xl text-red-700">
          RedwoodJS Indonesia
        </h1>
      </div>
      <div className="mt-2 p-6 mx-auto flex max-w-xl rounded shadow-lg bg-red-800 text-white">
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Redwood is React + GraphQL + Prisma2 + Babel + webpack + CDN +
            Functions + DB (+ Jest, Storybook, &amp; others soon). I see so much
            untapped potential in this mix of technologies. Let’s unlock it
            together! Follow{' '}
            <a href="https://twitter.com/redwoodjs?ref_src=twsrc%5Etfw">
              @redwoodjs
            </a>{' '}
            for updates.
          </p>
          &mdash; Tom Preston-Werner (@mojombo){' '}
          <a href="https://twitter.com/mojombo/status/1237441122881794048?ref_src=twsrc%5Etfw">
            March 10, 2020
          </a>
        </blockquote>{' '}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>
    </>
  )
}

export default HomePage
