import React, { Component } from 'react'
import Highlight from '~/components/tags/highlight'

const code = {
  keaUsage: require('raw-loader!./code/kea-usage.txt'),
  keaPath: require('raw-loader!./code/kea-path.txt'),
  keaConstants: require('raw-loader!./code/kea-constants.txt'),
  keaActions: require('raw-loader!./code/kea-actions.txt'),
  keaReducers: require('raw-loader!./code/kea-reducers.txt'),
  keaSelectors: require('raw-loader!./code/kea-selectors.txt'),
  keaConnect: require('raw-loader!./code/kea-connect.txt'),
  keaPlugins: require('raw-loader!./code/kea-plugins.txt')
}

export default class API extends Component {
  render () {
    return (
      <div className='api-scene'>
        <h2><code>kea(options)</code></h2>
        <p>
          Create a new kea <strong>logic store</strong> and connect it to redux.
        </p>
        <h3>Usage</h3>
        <p>
          Here is a complete example with all the options available. See below for further explanations.
        </p>
        <Highlight className='javascript'>{code.keaUsage}</Highlight>

        <h3>Options</h3>

        <h4>plugins: <code>[]</code></h4>
        <p>
          Plugins that only this logic store will use. See the <code>plugins</code> array in <code>getStore</code> on how to install
          global plugins.
        </p>
        <Highlight className='javascript'>{code.keaPlugins}</Highlight>

        <h4>path: <code>() => []</code></h4>
        <p>
          Give a name to the logic store and register it in a certain location in your application's Redux tree.
        </p>
        <Highlight className='javascript'>{code.keaPath}</Highlight>

        <h4>constants: <code>() => []</code></h4>
        <p>
          Create constants that can be used in other parts of the logic store.
        </p>
        <Highlight className='javascript'>{code.keaConstants}</Highlight>

        <h4>actions: <code>{'({ path, constants }) => ({})'}</code></h4>
        <p>
          Define action creators
        </p>
        <Highlight className='javascript'>{code.keaActions}</Highlight>

        <h4>reducers: <code>{'({ path, constants, actions }) => ({})'}</code></h4>
        <p>
          Define the structure and logic of your reducers
        </p>
        <Highlight className='javascript'>{code.keaReducers}</Highlight>

        <h4>selectors: <code>{'({ path, constants, actions, selectors }) => ({})'}</code></h4>
        <p>
          Define selectors, which are only recomputed when their input changes
        </p>
        <Highlight className='javascript'>{code.keaSelectors}</Highlight>

        <h4>connect: <code>{'{}'}</code></h4>
        <p>
          Fetch actions and selectors/props from other logic stores.
        </p>
        <Highlight className='javascript'>{code.keaConnect}</Highlight>
      </div>
    )
  }
}

