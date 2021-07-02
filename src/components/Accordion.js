import React, {useState} from "react";




const Accordion = (props ) =>{
    //const [foodArray, setFoodArray] = useState([])
    const [isDivCollapsed, setIsDivCollapsed] = useState(false);
    const handleDivCollapse =()=> setIsDivCollapsed(!isDivCollapsed);
    const foodList =  [
        {
        itemSize: "1000",
        quantity: "0",
        },
        {
        itemSize: "3000",
        quantity: "0",
        },
        {
        itemSize: "5000",
        quantity: "0",
        },
        {
        itemSize: "10000",
        quantity: "0",
        },
        {
        itemSize: "30000",
        quantity: "0",
        },
        {
        itemSize: "50000",
        quantity: "0",
        },
        {
        itemSize: "150000",
        quantity: "0",
        },
        {
        itemSize: "500000",
        quantity: "0",
        },
        {
        itemSize: "1500000",
        quantity: "0",
        },  
    ];
    const woodList =  [
        {
            itemSize: "1000",
            quantity: "0",
            },
            {
            itemSize: "3000",
            quantity: "0",
            },
            {
            itemSize: "5000",
            quantity: "0",
            },
            {
            itemSize: "10000",
            quantity: "0",
            },
            {
            itemSize: "30000",
            quantity: "0",
            },
            {
            itemSize: "50000",
            quantity: "0",
            },
            {
            itemSize: "150000",
            quantity: "0",
            },
            {
            itemSize: "500000",
            quantity: "0",
            },
            {
            itemSize: "1500000",
            quantity: "0",
            },
    ];
    const ironList =  [
        {
        itemSize: "200",
        quantity: "0",
        },
        {
        itemSize: "600",
        quantity: "0",
        },
        {
        itemSize: "1000",
        quantity: "0",
        },
        {
        itemSize: "2000",
        quantity: "0",
        },
        {
        itemSize: "6000",
        quantity: "0",
        },
        {
        itemSize: "10000",
        quantity: "0",
        },
        {
        itemSize: "30000",
        quantity: "0",
        },
        {
        itemSize: "100000",
        quantity: "0",
        },
        {
        itemSize: "300000",
        quantity: "0",
        },
    ];
    const silverList =  [
        {
        itemSize: "50",
        quantity: "0",
        },
        {
        itemSize: "150",
        quantity: "0",
        },
        {
        itemSize: "250",
        quantity: "0",
        },
        {
        itemSize: "500",
        quantity: "0",
        },
        {
        itemSize: "1500",
        quantity: "0",
        },
        {
        itemSize: "2500",
        quantity: "0",
        },
        {
        itemSize: "25000",
        quantity: "0",
        },
        {
        itemSize: "75000",
        quantity: "0",
        },
    ];


   function setRss(material, itemSize, quantity){
       props.onChange(material, itemSize, quantity);
   }

   function setFarmItemRss(material, itemSize, quantity, name){
    props.onChange(material, itemSize, quantity, name);
}

    //console.log(props.content[0])
    const rss = props.title;
    const name = props.name;
    let itemMenu;
    if(name !== "main"){
        if(rss === "Food"){
            const itemArray = props.content;
            itemMenu = <div className="row">
            <div className="col-6">
            {foodList.map((myObject, index) => {
                return (
                    <div>
                        {index <= 4 &&
                            <div className='row'>
                                <div className='col-5'>
                                    <label>{myObject.itemSize}</label>
                                </div>
                                <div className='col-6'>
                                    <input key={props.title+index} defaultValue={itemArray[index].toString()} className='form-control mr-sm-2' type='number' min="0" pattern="[0-9]*" onWheel={(e) => e.target.blur()} id={`food${myObject.itemSize}${name}`} onBlur={e => setFarmItemRss("food", myObject.itemSize, e.target.value, name)}></input>
                                    <br/>
                                </div>
                            </div>
                        }
                    </div>
                );
            })}
            </div>
            <div className="col-6">
            {foodList.map((myObject, index) => {
                return (
                    <div>
                        {index > 4 &&
                            <div className='row'>
                                <div className='col-5'>
                                    <label>{myObject.itemSize}</label>
                                </div>
                                <div className='col-6'>
                                    <input key={props.title+index} defaultValue={itemArray[index].toString()} className='form-control mr-sm-2' type='number' min="0" id={`food${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setFarmItemRss("food", myObject.itemSize, e.target.value, name)}></input>
                                    <br/>
                                </div>
                            </div>
                        }
                    </div>
                );
            })}
            </div>
       </div>;
        }else if(rss === "Wood"){
            const itemArray = props.content;
            itemMenu = <div className="row">
            <div className="col-6">
            {woodList.map((myObject, index) => {
                return (
                    <div>
                        {index <= 4 &&
                            <div className='row'>
                                <div className='col-5'>
                                    <label>{myObject.itemSize}</label>
                                </div>
                                <div className='col-6'>
                                    <input key={props.title+index} defaultValue={itemArray[index].toString()} className='form-control mr-sm-2' type='number' min="0" id={`wood${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setFarmItemRss("wood", myObject.itemSize, e.target.value, name)}></input>
                                    <br/>
                                </div>
                            </div>
                        }
                    </div>
                );
            })}
            </div>
            <div className="col-6">
            {woodList.map((myObject, index) => {
                return (
                    <div>
                        {index > 4 &&
                            <div className='row'>
                                <div className='col-5'>
                                    <label>{myObject.itemSize}</label>
                                </div>
                                <div className='col-6'>
                                    <input key={props.title+index} defaultValue={itemArray[index].toString()} className='form-control mr-sm-2' type='number' min="0" id={`wood${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setFarmItemRss("wood", myObject.itemSize, e.target.value, name)}></input>
                                    <br/>
                                </div>
                            </div>
                        }
                    </div>
                );
            })}
            </div>
       </div>;
        }else if (rss === "Iron"){
            const itemArray = props.content;
            itemMenu = <div className="row">
                            <div className="col-6">
                            {ironList.map((myObject, index) => {
                                return (
                                    <div>
                                        {index <= 4 &&
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <label>{myObject.itemSize}</label>
                                                </div>
                                                <div className='col-6'>
                                                    <input key={props.title+index} defaultValue={itemArray[index].toString()} className='form-control mr-sm-2' type='number' min="0" id={`iron${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setFarmItemRss("iron", myObject.itemSize, e.target.value, name)}></input>
                                                    <br/>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                            </div>
                            <div className="col-6">
                            {ironList.map((myObject, index) => {
                                return (
                                    <div>
                                        {index > 4 &&
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <label>{myObject.itemSize}</label>
                                                </div>
                                                <div className='col-6'>
                                                    <input key={props.title+index} defaultValue={itemArray[index].toString()} className='form-control mr-sm-2' type='number' min="0" id={`iron${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setFarmItemRss("iron", myObject.itemSize, e.target.value, name)}></input>
                                                    <br/>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                            </div>
                       </div>;
        }else if (rss === "Silver"){
            const itemArray = props.content;
            itemMenu = <div className="row">
                            <div className="col-6">
                            {silverList.map((myObject, index) => {
                                return (
                                    <div>
                                        {index <= 3 &&
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <label>{myObject.itemSize}</label>
                                                </div>
                                                <div className='col-6'>
                                                    <input key={props.title+index} defaultValue={itemArray[index].toString()} className='form-control mr-sm-2' type='number' min="0" id={`silver${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setFarmItemRss("silver", myObject.itemSize, e.target.value, name)}></input>
                                                    <br/>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                            </div>
                            <div className="col-6">
                            {silverList.map((myObject, index) => {
                                return (
                                    <div>
                                        {index > 3 &&
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <label>{myObject.itemSize}</label>
                                                </div>
                                                <div className='col-6'>
                                                    <input key={props.title+index} defaultValue={itemArray[index].toString()} className='form-control mr-sm-2' type='number' min="0" id={`silver${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setFarmItemRss("silver", myObject.itemSize, e.target.value, name)}></input>
                                                    <br/>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                            </div>
                       </div>;
        }
    }else{
        if(rss === "Food"){
            const itemArray = props.content;
            //console.log(itemArray);
            itemMenu = <div className="row">
            <div className="col-6">
            {foodList.map((myObject, index) => {
                return (
                    <div>
                        {index <= 4 &&
                            <div className='row'>
                                <div className='col-5'>
                                    <label>{myObject.itemSize}</label>
                                </div>
                                <div className='col-6'>
                                    <input key={props.title+index} defaultValue={itemArray[index]} className='form-control mr-sm-2' type='number' min="0" pattern="[0-9]*" id={`food${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setRss("food", myObject.itemSize, e.target.value)}></input>
                                    <br/>
                                </div>
                            </div>
                        }
                    </div>
                );
            })}
            </div>
            <div className="col-6">
            {foodList.map((myObject, index) => {
                return (
                    <div>
                        {index > 4 &&
                            <div className='row'>
                                <div className='col-5'>
                                    <label>{myObject.itemSize}</label>
                                </div>
                                <div className='col-6'>
                                    <input key={props.title+index} defaultValue={itemArray[index]} className='form-control mr-sm-2' type='number' min="0" id={`food${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setRss("food", myObject.itemSize, e.target.value)}></input>
                                    <br/>
                                </div>
                            </div>
                        }
                    </div>
                );
            })}
            </div>
       </div>;
        }else if(rss === "Wood"){
            const itemArray = props.content;
            itemMenu = <div className="row">
            <div className="col-6">
            {woodList.map((myObject, index) => {
                return (
                    <div>
                        {index <= 4 &&
                            <div className='row'>
                                <div className='col-5'>
                                    <label>{myObject.itemSize}</label>
                                </div>
                                <div className='col-6'>
                                    <input key={props.title+index} defaultValue={itemArray[index]} className='form-control mr-sm-2' type='number' min="0" id={`wood${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setRss("wood", myObject.itemSize, e.target.value)}></input>
                                    <br/>
                                </div>
                            </div>
                        }
                    </div>
                );
            })}
            </div>
            <div className="col-6">
            {woodList.map((myObject, index) => {
                return (
                    <div>
                        {index > 4 &&
                            <div className='row'>
                                <div className='col-5'>
                                    <label>{myObject.itemSize}</label>
                                </div>
                                <div className='col-6'>
                                    <input key={props.title+index} defaultValue={itemArray[index]} className='form-control mr-sm-2' type='number' min="0" id={`wood${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setRss("wood", myObject.itemSize, e.target.value)}></input>
                                    <br/>
                                </div>
                            </div>
                        }
                    </div>
                );
            })}
            </div>
       </div>;
        }else if (rss === "Iron"){
            const itemArray = props.content;
            itemMenu = <div className="row">
                            <div className="col-6">
                            {ironList.map((myObject, index) => {
                                return (
                                    <div>
                                        {index <= 4 &&
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <label>{myObject.itemSize}</label>
                                                </div>
                                                <div className='col-6'>
                                                    <input key={props.title+index} defaultValue={itemArray[index]} className='form-control mr-sm-2' type='number' min="0" id={`iron${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setRss("iron", myObject.itemSize, e.target.value)}></input>
                                                    <br/>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                            </div>
                            <div className="col-6">
                            {ironList.map((myObject, index) => {
                                return (
                                    <div>
                                        {index > 4 &&
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <label>{myObject.itemSize}</label>
                                                </div>
                                                <div className='col-6'>
                                                    <input key={props.title+index} defaultValue={itemArray[index]} className='form-control mr-sm-2' type='number' min="0" id={`iron${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setRss("iron", myObject.itemSize, e.target.value)}></input>
                                                    <br/>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                            </div>
                       </div>;
        }else if (rss === "Silver"){
            const itemArray = props.content;
            itemMenu = <div className="row">
                            <div className="col-6">
                            {silverList.map((myObject, index) => {
                                return (
                                    <div>
                                        {index <= 3 &&
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <label>{myObject.itemSize}</label>
                                                </div>
                                                <div className='col-6'>
                                                    <input key={props.title+index} defaultValue={itemArray[index]} className='form-control mr-sm-2' type='number' min="0" id={`silver${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setRss("silver", myObject.itemSize, e.target.value)}></input>
                                                    <br/>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                            </div>
                            <div className="col-6">
                            {silverList.map((myObject, index) => {
                                return (
                                    <div>
                                        {index > 3 &&
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <label>{myObject.itemSize}</label>
                                                </div>
                                                <div className='col-6'>
                                                    <input key={props.title+index} defaultValue={itemArray[index]} className='form-control mr-sm-2' type='number' min="0" id={`silver${myObject.itemSize}${name}`} onWheel={(e) => e.target.blur()} onBlur={e => setRss("silver", myObject.itemSize, e.target.value)}></input>
                                                    <br/>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                            </div>
                       </div>;
        }else if (rss === "Noble Badge"){
            itemMenu = <div className="row">
                            <div className='col-5'>
                                <label>Noble Badges</label>
                            </div>
                            <div className='col-6'>
                                <input key={props.title} defaultValue={props.content} className='form-control mr-sm-2' type='number' min="0" pattern="[0-9]*" id="nobleBadges" onWheel={(e) => e.target.blur()} onBlur={e => setRss("noble badge", "1", e.target.value)}></input>
                                <br/>
                            </div>
                        </div>;
        }else if (rss === "Royal Badge"){
            itemMenu = <div className="row">
                            <div className='col-5'>
                                <label>Royal Badges</label>
                            </div>
                            <div className='col-6'>
                                <input key={props.title} defaultValue={props.content} className='form-control mr-sm-2' type='number' min="0" id="royalBadges" onWheel={(e) => e.target.blur()} onBlur={e => setRss("royal badge", "1", e.target.value)}></input>
                                <br/>
                            </div>
                        </div>;
        }else if (rss === "Book of War"){
            itemMenu = <div className="row">
                            <div className='col-5'>
                                <label>Book of War</label>
                            </div>
                            <div className='col-6'>
                                <input key={props.title} defaultValue={props.content} className='form-control mr-sm-2' type='number' min="0" id="bookOfWar" onWheel={(e) => e.target.blur()} onBlur={e => setRss("book of war", "1", e.target.value)}></input>
                                <br/>
                            </div>
                        </div>;
        }
    }
    



    return(
        <div className="accordion">
            <div className="card">
                
                <div className="card-header">
                        <button type="button" className="accordion__btn" aria-expanded={!isDivCollapsed ? true:false} onClick={handleDivCollapse} >
                            <h5>{props.title}</h5>
                            
                        </button>
                </div>
                <div id="collapseOne" className={`${isDivCollapsed ? 'collapse show justify-content-end' : ''} collapse justify-content-end`} >
                    <div className="card-body">
                        {itemMenu}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;