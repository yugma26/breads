const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads}) {
    return (
      <Default>
        <h2>Index Page</h2>
        {/*this is a jsx comment.*/}
         {/*<p>i have {breads[0].name} bread!</p>*/}
         <ul>
        {breads.map((bread, index) => {
          return (
            <li key={index}>
              <a href={`/breads/${index}`}>{bread.name}</a>
              <a href="/places">
                     <button className="btn-primary">Places Page</button>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="newButton">
         <a href="/breads/new"><button>Add a new bread</button></a>
     </div>
         </Default>
    )
  }

module.exports = Index
