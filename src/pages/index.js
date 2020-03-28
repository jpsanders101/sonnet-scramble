import React from "react"
import { Link } from "gatsby"

export default () => <main>
  <h1>{`Sonnet Scramble`}</h1>
  <p>{`At several times during Shakespeare’s career, the London theatres which were his main livelihood were closed due to outbreaks of the plague. It’s a possible reason why he turned his hand to writing poems that readers could enjoy in privacy when public life became dangerous.`}</p>
  <p>{`A book of 154 Sonnets was first published in 1609.`}</p>
  <p>{`Here, they are all scrambled. Can you unscramble them?`}</p>
  <Link to="/1">{`Begin`}</Link>
</main>
