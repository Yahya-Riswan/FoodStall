import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getDataInfo from './redux/api'
import { setWifi } from './redux/redux'
function Recipes() {
    const data = useSelector((state) => {
        return state.data
    })
    const loading = useSelector((state) => {
        return state.loading
    })
    const error = useSelector((state) => {
        return state.error
    })
    const wifi = useSelector((state) => {
        return state.wifi
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataInfo())
    }, [wifi])
    return (
        <div className="container">
            <h1>FoodStall</h1>
            <div className="div">
                <label htmlFor="wifi">Wifi</label>
                <input type="checkbox" name="wifi" id="wifi" checked={wifi} onChange={(e)=>dispatch(setWifi(e.target.checked))}/>
            </div>
            <div className="content">
                {
                    loading &&
                    <div className="loading"><h6>Loading ...</h6></div>
                }
                {
                    !loading && error &&
                    <div className="error">{error}</div>
                }
                {
                    !loading && !error && data.recipes &&
                    data.recipes.map((recipe) => (
                        <div className="recipe" key={recipe.id}>
                            <img src={recipe.image} alt="" />
                            <h1 className="title">{recipe.name}</h1>
                            <div>
                                <h3>{recipe.cuisine}</h3>
                                <h3>{recipe.rating}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Recipes