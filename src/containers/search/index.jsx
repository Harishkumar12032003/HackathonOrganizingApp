import React,{useState} from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/searchbar';
import FilterBtn from '../../components/filterbtn';
import { HackCard } from '../../components/Hackathons';


const Container=styled.div`
    width: 100%;
    height: 324px;
    margin-top:125px;

    background: #002A3B;
`;

const Head=styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: calc(50% - 353px/2 - 0.5px);
    padding-top:72px;
    color: #FFFFFF;
`;

const SearchBarContainer=styled.div`
    border-radius:100px;
    margin-top:80px;
`;

const Filter=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`;

const Btn=styled.div`
    margin-top:60px;
    margin-left:20px;
    width:30px;
    background:#FFFFFF;
    height:12px;
    border-radius:10px;
`;

export function Search(props){
 
    

    return <div>
        <Container>
            <Head>
            Explore Challenges 
            </Head>
            <Filter>
           <SearchBar></SearchBar>
           <Btn>
           <div class="dropdown" >
                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filter
                </button>
                    <div class="dropdown-menu" style={{padding:"10px"}}>
                    <h6 class="dropdown-header">Status</h6>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                        All
                    </label>
                    </div>
 
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                        Upcoming
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                       Active
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                        Past
                    </label>
                    </div>
                    <div class="dropdown-divider"></div>
                    <h6 class="dropdown-header">Level</h6>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                       Easy
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                       Medium
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                        Hard
                    </label>
                    </div>
            </div>
            </div>
           </Btn>
           </Filter>
           
        </Container>
       
    </div>
}







