import React, {SyntheticEvent, useState, useEffect  } from 'react';
import LeftMenu from '../components/LeftMenu';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

const address = '';

const selectStyle={
    minWidth: "42px",
}

const linkStyle ={
    color: 'black'
}

const Heroes = () => {
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");

    const[appointed, setAppointed]= useState("");

    const[pendragonLevel, setPendragonLevel] = useState("");
    const[pendragonStarLevel, setPendragonStarLevel] = useState("");
    const[pendragonskill1Level, setPendragonSkill1Level] = useState("");
    const[pendragonskill2Level, setPendragonSkill2Level] = useState("");
    const[pendragonskill3Level, setPendragonSkill3Level] = useState("");
    const[pendragonskill4Level, setPendragonSkill4Level] = useState("");
    const[pendragonskill5Level, setPendragonSkill5Level] = useState("");
    const[pendragonskill6Level, setPendragonSkill6Level] = useState("");
    const pendragonLevelOptions = [
        {
            label: "0",
            value: "0",
          },
        {
        label: "1",
        value: "1",
      },
      {
        label: "2",
        value: "2",
      },
      {
        label: "3",
        value: "3",
      },
      {
        label: "4",
        value: "4",
      },
      {
          label: "5",
          value: "5",
        },
        {
          label: "6",
          value: "6",
        },
        {
          label: "7",
          value: "7",
        },
        {
          label: "8",
          value: "8",
        },
        {
          label: "9",
          value: "9",
        },
        {
          label: "10",
          value: "10",
        },
        {
          label: "11",
          value: "11",
        },
        {
          label: "12",
          value: "12",
        },
        {
          label: "13",
          value: "13",
        },
        {
          label: "14",
          value: "14",
        },
        {
          label: "15",
          value: "15",
        },
        {
          label: "16",
          value: "16",
        },
        {
          label: "17",
          value: "17",
        },
        {
          label: "18",
          value: "18",
        },
        {
          label: "19",
          value: "19",
        },
        {
          label: "20",
          value: "20",
        },
        {
          label: "21",
          value: "21",
        },
        {
          label: "22",
          value: "22",
        },
        {
          label: "23",
          value: "23",
        },
        {
          label: "24",
          value: "24",
        },
        {
          label: "25",
          value: "25",
        },
        {
          label: "26",
          value: "26",
        },
        {
          label: "27",
          value: "27",
        },
        {
          label: "28",
          value: "28",
        },
        {
          label: "29",
          value: "29",
        },
        {
          label: "30",
          value: "30",
        },
        {
          label: "31",
          value: "31",
        },
        {
          label: "32",
          value: "32",
        },
        {
          label: "33",
          value: "33",
        },
        {
          label: "34",
          value: "34",
        },
        {
          label: "35",
          value: "35",
        },
        {
          label: "36",
          value: "36",
        },
        {
          label: "37",
          value: "37",
        },
        {
          label: "38",
          value: "38",
        },
        {
          label: "39",
          value: "39",
        },
        {
          label: "40",
          value: "40",
        },
        {
          label: "41",
          value: "41",
        },
        {
          label: "42",
          value: "42",
        },
        {
          label: "43",
          value: "43",
        },
        {
          label: "44",
          value: "44",
        },
        {
          label: "45",
          value: "45",
        },
        {
            label: "46",
            value: "46",
          },
          {
            label: "47",
            value: "47",
          },
          {
            label: "48",
            value: "48",
          },
          {
            label: "49",
            value: "49",
          },
          {
            label: "50",
            value: "50",
          },
          {
            label: "51",
            value: "51",
          },
          {
            label: "52",
            value: "52",
          },
          {
            label: "53",
            value: "53",
          },
          {
            label: "54",
            value: "54",
          },
          {
            label: "55",
            value: "55",
          },
          {
            label: "56",
            value: "56",
          },
          {
            label: "57",
            value: "57",
          },
          {
            label: "58",
            value: "58",
          },
          {
            label: "59",
            value: "59",
          },
          {
            label: "60",
            value: "60",
          },
    ];
    const pendragonStarLevelOptions = [
        {
            label: "0",
            value: "0",
          },
        {
        label: "1",
        value: "1",
      },
      /*{
        label: "2",
        value: "2",
      },
      {
        label: "3",
        value: "3",
      },
      {
        label: "4",
        value: "4",
      },
      {
          label: "5",
          value: "5",
        },
        {
          label: "6",
          value: "6",
        },*/
    ];
    const pendragonSkill1Options = [
        {
            label: "0",
            value: "0",
          },
        /*{
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
            {
              label: "41",
              value: "41",
            },
            {
              label: "42",
              value: "42",
            },
            {
              label: "43",
              value: "43",
            },
            {
              label: "44",
              value: "44",
            },
            {
              label: "45",
              value: "45",
            },
            {
                label: "46",
                value: "46",
              },
              {
                label: "47",
                value: "47",
              },
              {
                label: "48",
                value: "48",
              },
              {
                label: "49",
                value: "49",
              },
              {
                label: "50",
                value: "50",
              },
              {
                label: "51",
                value: "51",
              },
              {
                label: "52",
                value: "52",
              },
              {
                label: "53",
                value: "53",
              },
              {
                label: "54",
                value: "54",
              },
              {
                label: "55",
                value: "55",
              },
              {
                label: "56",
                value: "56",
              },
              {
                label: "57",
                value: "57",
              },
              {
                label: "58",
                value: "58",
              },
              {
                label: "59",
                value: "59",
              },*/
              {
                label: "60",
                value: "60",
              },
    ];
    const pendragonSkill2Options = [
        {
            label: "0",
            value: "0",
          },
        /*{
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
            {
              label: "41",
              value: "41",
            },
            {
              label: "42",
              value: "42",
            },
            {
              label: "43",
              value: "43",
            },
            {
              label: "44",
              value: "44",
            },
            {
              label: "45",
              value: "45",
            },
            {
                label: "46",
                value: "46",
              },
              {
                label: "47",
                value: "47",
              },
              {
                label: "48",
                value: "48",
              },
              {
                label: "49",
                value: "49",
              },
              {
                label: "50",
                value: "50",
              },
              {
                label: "51",
                value: "51",
              },
              {
                label: "52",
                value: "52",
              },
              {
                label: "53",
                value: "53",
              },
              {
                label: "54",
                value: "54",
              },
              {
                label: "55",
                value: "55",
              },
              {
                label: "56",
                value: "56",
              },
              {
                label: "57",
                value: "57",
              },
              {
                label: "58",
                value: "58",
              },
              {
                label: "59",
                value: "59",
              },*/
              {
                label: "60",
                value: "60",
              },
    ];
    const pendragonSkill3Options = [
        {
            label: "0",
            value: "0",
          },
        {
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
            {
              label: "41",
              value: "41",
            },
            {
              label: "42",
              value: "42",
            },
            {
              label: "43",
              value: "43",
            },
            {
              label: "44",
              value: "44",
            },
            {
              label: "45",
              value: "45",
            },
            {
                label: "46",
                value: "46",
              },
              {
                label: "47",
                value: "47",
              },
              {
                label: "48",
                value: "48",
              },
              {
                label: "49",
                value: "49",
              },
              {
                label: "50",
                value: "50",
              },
              {
                label: "51",
                value: "51",
              },
              {
                label: "52",
                value: "52",
              },
              {
                label: "53",
                value: "53",
              },
              {
                label: "54",
                value: "54",
              },
              {
                label: "55",
                value: "55",
              },
              {
                label: "56",
                value: "56",
              },
              {
                label: "57",
                value: "57",
              },
              {
                label: "58",
                value: "58",
              },
              {
                label: "59",
                value: "59",
              },
              {
                label: "60",
                value: "60",
              },
    ];
    const pendragonSkill4Options = [
        {
            label: "0",
            value: "0",
          },
        {
            label: "1",
            value: "1",
          },
        /*  {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
            {
              label: "41",
              value: "41",
            },
            {
              label: "42",
              value: "42",
            },
            {
              label: "43",
              value: "43",
            },
            {
              label: "44",
              value: "44",
            },
            {
              label: "45",
              value: "45",
            },
            {
                label: "46",
                value: "46",
              },
              {
                label: "47",
                value: "47",
              },
              {
                label: "48",
                value: "48",
              },
              {
                label: "49",
                value: "49",
              },
              {
                label: "50",
                value: "50",
              },
              {
                label: "51",
                value: "51",
              },
              {
                label: "52",
                value: "52",
              },
              {
                label: "53",
                value: "53",
              },
              {
                label: "54",
                value: "54",
              },
              {
                label: "55",
                value: "55",
              },
              {
                label: "56",
                value: "56",
              },
              {
                label: "57",
                value: "57",
              },
              {
                label: "58",
                value: "58",
              },
              {
                label: "59",
                value: "59",
              },
              {
                label: "60",
                value: "60",
              },*/
    ];
    const pendragonSkill5Options = [
        {
            label: "0",
            value: "0",
          },
        {
            label: "1",
            value: "1",
          },
         /* {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
            {
              label: "41",
              value: "41",
            },
            {
              label: "42",
              value: "42",
            },
            {
              label: "43",
              value: "43",
            },
            {
              label: "44",
              value: "44",
            },
            {
              label: "45",
              value: "45",
            },
            {
                label: "46",
                value: "46",
              },
              {
                label: "47",
                value: "47",
              },
              {
                label: "48",
                value: "48",
              },
              {
                label: "49",
                value: "49",
              },
              {
                label: "50",
                value: "50",
              },
              {
                label: "51",
                value: "51",
              },
              {
                label: "52",
                value: "52",
              },
              {
                label: "53",
                value: "53",
              },
              {
                label: "54",
                value: "54",
              },
              {
                label: "55",
                value: "55",
              },
              {
                label: "56",
                value: "56",
              },
              {
                label: "57",
                value: "57",
              },
              {
                label: "58",
                value: "58",
              },
              {
                label: "59",
                value: "59",
              },
              {
                label: "60",
                value: "60",
              },*/
    ];
    const pendragonSkill6Options = [
        {
            label: "0",
            value: "0",
          },
        {
            label: "1",
            value: "1",
          },
        /*  {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
            {
              label: "41",
              value: "41",
            },
            {
              label: "42",
              value: "42",
            },
            {
              label: "43",
              value: "43",
            },
            {
              label: "44",
              value: "44",
            },
            {
              label: "45",
              value: "45",
            },
            {
                label: "46",
                value: "46",
              },
              {
                label: "47",
                value: "47",
              },
              {
                label: "48",
                value: "48",
              },
              {
                label: "49",
                value: "49",
              },
              {
                label: "50",
                value: "50",
              },
              {
                label: "51",
                value: "51",
              },
              {
                label: "52",
                value: "52",
              },
              {
                label: "53",
                value: "53",
              },
              {
                label: "54",
                value: "54",
              },
              {
                label: "55",
                value: "55",
              },
              {
                label: "56",
                value: "56",
              },
              {
                label: "57",
                value: "57",
              },
              {
                label: "58",
                value: "58",
              },
              {
                label: "59",
                value: "59",
              },
              {
                label: "60",
                value: "60",
              },*/
    ];

    

    const[iseultLevel, setIseultLevel] = useState("");
    const[iseultStarLevel, setIseultStarLevel] = useState("");
    const[iseultskill1Level, setIseultSkill1Level] = useState("");
    const[iseultskill2Level, setIseultSkill2Level] = useState("");
    const[iseultskill3Level, setIseultSkill3Level] = useState("");
    const[iseultskill4Level, setIseultSkill4Level] = useState("");
    const[iseultskill5Level, setIseultSkill5Level] = useState("");
    const iseultLevelOptions = [
        {
            label: "0",
            value: "0",
          },
        {
        label: "1",
        value: "1",
      },
      {
        label: "2",
        value: "2",
      },
      {
        label: "3",
        value: "3",
      },
      {
        label: "4",
        value: "4",
      },
      {
          label: "5",
          value: "5",
        },
        {
          label: "6",
          value: "6",
        },
        {
          label: "7",
          value: "7",
        },
        {
          label: "8",
          value: "8",
        },
        {
          label: "9",
          value: "9",
        },
        {
          label: "10",
          value: "10",
        },
        {
          label: "11",
          value: "11",
        },
        {
          label: "12",
          value: "12",
        },
        {
          label: "13",
          value: "13",
        },
        {
          label: "14",
          value: "14",
        },
        {
          label: "15",
          value: "15",
        },
        {
          label: "16",
          value: "16",
        },
        {
          label: "17",
          value: "17",
        },
        {
          label: "18",
          value: "18",
        },
        {
          label: "19",
          value: "19",
        },
        {
          label: "20",
          value: "20",
        },
        {
          label: "21",
          value: "21",
        },
        {
          label: "22",
          value: "22",
        },
        {
          label: "23",
          value: "23",
        },
        {
          label: "24",
          value: "24",
        },
        {
          label: "25",
          value: "25",
        },
        {
          label: "26",
          value: "26",
        },
        {
          label: "27",
          value: "27",
        },
        {
          label: "28",
          value: "28",
        },
        {
          label: "29",
          value: "29",
        },
        {
          label: "30",
          value: "30",
        },
        {
          label: "31",
          value: "31",
        },
        {
          label: "32",
          value: "32",
        },
        {
          label: "33",
          value: "33",
        },
        {
          label: "34",
          value: "34",
        },
        {
          label: "35",
          value: "35",
        },
        {
          label: "36",
          value: "36",
        },
        {
          label: "37",
          value: "37",
        },
        {
          label: "38",
          value: "38",
        },
        {
          label: "39",
          value: "39",
        },
        {
          label: "40",
          value: "40",
        },
        {
          label: "41",
          value: "41",
        },
        {
          label: "42",
          value: "42",
        },
        {
          label: "43",
          value: "43",
        },
        {
          label: "44",
          value: "44",
        },
        {
          label: "45",
          value: "45",
        },
        {
            label: "46",
            value: "46",
          },
          {
            label: "47",
            value: "47",
          },
          {
            label: "48",
            value: "48",
          },
          {
            label: "49",
            value: "49",
          },
          {
            label: "50",
            value: "50",
          },
    ];
    const iseultStarLevelOptions = [
        {
            label: "0",
            value: "0",
          },
          {
        label: "1",
        value: "1",
      },
      {
        label: "2",
        value: "2",
      },
      {
        label: "3",
        value: "3",
      },
      /*{
        label: "4",
        value: "4",
      },
      {
          label: "5",
          value: "5",
        },
        {
          label: "6",
          value: "6",
        },*/
    ];
    const iseultSkill1Options = [
        {
            label: "0",
            value: "0",
          },
        /*{
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
            {
              label: "41",
              value: "41",
            },
            {
              label: "42",
              value: "42",
            },
            {
              label: "43",
              value: "43",
            },
            {
              label: "44",
              value: "44",
            },
            {
              label: "45",
              value: "45",
            },
            {
                label: "46",
                value: "46",
              },
              {
                label: "47",
                value: "47",
              },
              {
                label: "48",
                value: "48",
              },
              {
                label: "49",
                value: "49",
              },*/
              {
                label: "50",
                value: "50",
              },
              
    ];
    const iseultSkill2Options = [
        {
            label: "0",
            value: "0",
          },
        /*{
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
            {
              label: "41",
              value: "41",
            },
            {
              label: "42",
              value: "42",
            },
            {
              label: "43",
              value: "43",
            },
            {
              label: "44",
              value: "44",
            },
            {
              label: "45",
              value: "45",
            },
            {
                label: "46",
                value: "46",
              },
              {
                label: "47",
                value: "47",
              },
              {
                label: "48",
                value: "48",
              },
              {
                label: "49",
                value: "49",
              },*/
              {
                label: "50",
                value: "50",
              },
              
    ];
    const iseultSkill3Options = [
        {
            label: "0",
            value: "0",
          },
        /*{
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
            {
              label: "41",
              value: "41",
            },
            {
              label: "42",
              value: "42",
            },
            {
              label: "43",
              value: "43",
            },
            {
              label: "44",
              value: "44",
            },
            {
              label: "45",
              value: "45",
            },
            {
                label: "46",
                value: "46",
              },
              {
                label: "47",
                value: "47",
              },
              {
                label: "48",
                value: "48",
              },
              {
                label: "49",
                value: "49",
              },*/
              {
                label: "50",
                value: "50",
              },
    ];
    const iseultSkill4Options = [
        {
            label: "0",
            value: "0",
          },
        /*{
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
            {
              label: "41",
              value: "41",
            },
            {
              label: "42",
              value: "42",
            },
            {
              label: "43",
              value: "43",
            },
            {
              label: "44",
              value: "44",
            },
            {
              label: "45",
              value: "45",
            },
            {
                label: "46",
                value: "46",
              },
              {
                label: "47",
                value: "47",
              },
              {
                label: "48",
                value: "48",
              },
              {
                label: "49",
                value: "49",
              },*/
              {
                label: "50",
                value: "50",
              },
              
    ];
    const iseultSkill5Options = [
        {
            label: "0",
            value: "0",
          },
        /*{
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
            {
              label: "41",
              value: "41",
            },
            {
              label: "42",
              value: "42",
            },
            {
              label: "43",
              value: "43",
            },
            {
              label: "44",
              value: "44",
            },
            {
              label: "45",
              value: "45",
            },
            {
                label: "46",
                value: "46",
              },
              {
                label: "47",
                value: "47",
              },
              {
                label: "48",
                value: "48",
              },
              {
                label: "49",
                value: "49",
              },*/
              {
                label: "50",
                value: "50",
              },
    ];

    

    const[ectorLevel, setEctorLevel] = useState("");
    const[ectorStarLevel, setEctorStarLevel] = useState("");
    const[ectorskill1Level, setEctorSkill1Level] = useState("");
    const[ectorskill2Level, setEctorSkill2Level] = useState("");
    const[ectorskill3Level, setEctorSkill3Level] = useState("");
    const ectorLevelOptions = [
        {
            label: "0",
            value: "0",
          },
          {
        label: "1",
        value: "1",
      },
      {
        label: "2",
        value: "2",
      },
      {
        label: "3",
        value: "3",
      },
      {
        label: "4",
        value: "4",
      },
      {
          label: "5",
          value: "5",
        },
        {
          label: "6",
          value: "6",
        },
        {
          label: "7",
          value: "7",
        },
        {
          label: "8",
          value: "8",
        },
        {
          label: "9",
          value: "9",
        },
        {
          label: "10",
          value: "10",
        },
        {
          label: "11",
          value: "11",
        },
        {
          label: "12",
          value: "12",
        },
        {
          label: "13",
          value: "13",
        },
        {
          label: "14",
          value: "14",
        },
        {
          label: "15",
          value: "15",
        },
        {
          label: "16",
          value: "16",
        },
        {
          label: "17",
          value: "17",
        },
        {
          label: "18",
          value: "18",
        },
        {
          label: "19",
          value: "19",
        },
        {
          label: "20",
          value: "20",
        },
        {
          label: "21",
          value: "21",
        },
        {
          label: "22",
          value: "22",
        },
        {
          label: "23",
          value: "23",
        },
        {
          label: "24",
          value: "24",
        },
        {
          label: "25",
          value: "25",
        },
        {
          label: "26",
          value: "26",
        },
        {
          label: "27",
          value: "27",
        },
        {
          label: "28",
          value: "28",
        },
        {
          label: "29",
          value: "29",
        },
        {
          label: "30",
          value: "30",
        },
    ];
    const ectorStarLevelOptions = [
        {
            label: "0",
            value: "0",
          },
          {
        label: "1",
        value: "1",
      },
      /*{
        label: "2",
        value: "2",
      },
      {
        label: "3",
        value: "3",
      },*/
    ];
    const ectorSkill1Options = [
        {
            label: "0",
            value: "0",
          },
        {
            label: "1",
            value: "1",
          },
         /* {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },*/
            
    ];
    const ectorSkill2Options = [
        {
            label: "0",
            value: "0",
          },
        {
            label: "1",
            value: "1",
          },
        /*  {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },*/     
    ];
    const ectorSkill3Options = [
        {
            label: "0",
            value: "0",
          },
        {
            label: "1",
            value: "1",
          },
        /*  {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },*/ 
    ];

    

    const[balanLevel, setBalanLevel] = useState("");
    const[balanStarLevel, setBalanStarLevel] = useState("");
    const[balanskill1Level, setBalanSkill1Level] = useState("");
    const[balanskill2Level, setBalanSkill2Level] = useState("");
    const[balanskill3Level, setBalanSkill3Level] = useState("");
    const[balanskill4Level, setBalanSkill4Level] = useState("");
    const balanLevelOptions = [
        {
            label: "0",
            value: "0",
          },
          {
        label: "1",
        value: "1",
      },
      {
        label: "2",
        value: "2",
      },
      {
        label: "3",
        value: "3",
      },
      {
        label: "4",
        value: "4",
      },
      {
          label: "5",
          value: "5",
        },
        {
          label: "6",
          value: "6",
        },
        {
          label: "7",
          value: "7",
        },
        {
          label: "8",
          value: "8",
        },
        {
          label: "9",
          value: "9",
        },
        {
          label: "10",
          value: "10",
        },
        {
          label: "11",
          value: "11",
        },
        {
          label: "12",
          value: "12",
        },
        {
          label: "13",
          value: "13",
        },
        {
          label: "14",
          value: "14",
        },
        {
          label: "15",
          value: "15",
        },
        {
          label: "16",
          value: "16",
        },
        {
          label: "17",
          value: "17",
        },
        {
          label: "18",
          value: "18",
        },
        {
          label: "19",
          value: "19",
        },
        {
          label: "20",
          value: "20",
        },
        {
          label: "21",
          value: "21",
        },
        {
          label: "22",
          value: "22",
        },
        {
          label: "23",
          value: "23",
        },
        {
          label: "24",
          value: "24",
        },
        {
          label: "25",
          value: "25",
        },
        {
          label: "26",
          value: "26",
        },
        {
          label: "27",
          value: "27",
        },
        {
          label: "28",
          value: "28",
        },
        {
          label: "29",
          value: "29",
        },
        {
          label: "30",
          value: "30",
        },
        {
          label: "31",
          value: "31",
        },
        {
          label: "32",
          value: "32",
        },
        {
          label: "33",
          value: "33",
        },
        {
          label: "34",
          value: "34",
        },
        {
          label: "35",
          value: "35",
        },
        {
          label: "36",
          value: "36",
        },
        {
          label: "37",
          value: "37",
        },
        {
          label: "38",
          value: "38",
        },
        {
          label: "39",
          value: "39",
        },
        {
          label: "40",
          value: "40",
        },
    ];
    const balanStarLevelOptions = [
        {
            label: "0",
            value: "0",
          },
          {
        label: "1",
        value: "1",
      },
      /*{
        label: "2",
        value: "2",
      },
      {
        label: "3",
        value: "3",
      },
      {
        label: "4",
        value: "4",
      },*/
    ];
    const balanSkill1Options = [
        {
            label: "0",
            value: "0",
          },
        {
            label: "1",
            value: "1",
          },
          /*{
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },*/
            {
              label: "40",
              value: "40",
            },
              
    ];
    const balanSkill2Options = [
        {
            label: "0",
            value: "0",
          },
        {
            label: "1",
            value: "1",
          },
          /*{
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },*/
            {
              label: "40",
              value: "40",
            },
    ];
    const balanSkill3Options = [
        {
            label: "0",
            value: "0",
          },
        {
            label: "1",
            value: "1",
          },
        /*  {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },*/
            {
              label: "40",
              value: "40",
            },
    ];
    const balanSkill4Options = [
        {
            label: "0",
            value: "0",
          },
        {
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
          {
            label: "4",
            value: "4",
          },
          {
              label: "5",
              value: "5",
            },
            {
              label: "6",
              value: "6",
            },
            {
              label: "7",
              value: "7",
            },
            {
              label: "8",
              value: "8",
            },
            {
              label: "9",
              value: "9",
            },
            {
              label: "10",
              value: "10",
            },
            {
              label: "11",
              value: "11",
            },
            {
              label: "12",
              value: "12",
            },
            {
              label: "13",
              value: "13",
            },
            {
              label: "14",
              value: "14",
            },
            {
              label: "15",
              value: "15",
            },
            {
              label: "16",
              value: "16",
            },
            {
              label: "17",
              value: "17",
            },
            {
              label: "18",
              value: "18",
            },
            {
              label: "19",
              value: "19",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "21",
              value: "21",
            },
            {
              label: "22",
              value: "22",
            },
            {
              label: "23",
              value: "23",
            },
            {
              label: "24",
              value: "24",
            },
            {
              label: "25",
              value: "25",
            },
            {
              label: "26",
              value: "26",
            },
            {
              label: "27",
              value: "27",
            },
            {
              label: "28",
              value: "28",
            },
            {
              label: "29",
              value: "29",
            },
            {
              label: "30",
              value: "30",
            },
            {
              label: "31",
              value: "31",
            },
            {
              label: "32",
              value: "32",
            },
            {
              label: "33",
              value: "33",
            },
            {
              label: "34",
              value: "34",
            },
            {
              label: "35",
              value: "35",
            },
            {
              label: "36",
              value: "36",
            },
            {
              label: "37",
              value: "37",
            },
            {
              label: "38",
              value: "38",
            },
            {
              label: "39",
              value: "39",
            },
            {
              label: "40",
              value: "40",
            },
    ];

    
    
    const appointedOptions=[
        {
            label: "None",
            value: "None",
        },
        {
            label: "Aurelius Pendragon",
            value: "Aurelius Pendragon",
        },
        {
            label: "Iseult the Fair",
            value: "Iseult the Fair",
        },
        {
            label: "Sir Balan",
            value: "Sir Balan",
        },
        {
            label: "Sir Ector",
            value: "Sir Ector",
        },
    ];

    useEffect(() => { 
        (
            async () => {

                const response = await fetch(address, {
                    method:'GET',
                    headers: {'Content-Type':'application/json'},
                    credentials: 'include', 
                });


                const content = await response.json();
                if(content.response === "fail"){
                    setError(content.message);
                    console.log(content.message);
                }else{
                    //console.log(content)
                    if(content[0] !== undefined){
                      setPendragonLevel(content[0].heroLvl.toString());
                    setPendragonStarLevel(content[0].heroStarLvl.toString());
                    setPendragonSkill1Level(content[0].heroSkills[0].skillLvl.toString());
                    setPendragonSkill2Level(content[0].heroSkills[1].skillLvl.toString());
                    setPendragonSkill3Level(content[0].heroSkills[2].skillLvl.toString());
                    setPendragonSkill4Level(content[0].heroSkills[3].skillLvl.toString());
                    setPendragonSkill5Level(content[0].heroSkills[4].skillLvl.toString());
                    setPendragonSkill6Level(content[0].heroSkills[5].skillLvl.toString());
                    }
                    if(content[1] !== undefined){
                      setIseultLevel(content[1].heroLvl.toString());
                    setIseultStarLevel(content[1].heroStarLvl.toString());
                    setIseultSkill1Level(content[1].heroSkills[0].skillLvl.toString());
                    setIseultSkill2Level(content[1].heroSkills[1].skillLvl.toString());
                    setIseultSkill3Level(content[1].heroSkills[2].skillLvl.toString());
                    setIseultSkill4Level(content[1].heroSkills[3].skillLvl.toString());
                    setIseultSkill5Level(content[1].heroSkills[4].skillLvl.toString());
                    }
                    if(content[2] !== undefined){
                      setBalanLevel(content[2].heroLvl.toString());
                    setBalanStarLevel(content[2].heroStarLvl.toString());
                    setBalanSkill1Level(content[2].heroSkills[0].skillLvl.toString());
                    setBalanSkill2Level(content[2].heroSkills[1].skillLvl.toString());
                    setBalanSkill3Level(content[2].heroSkills[2].skillLvl.toString());
                    setBalanSkill4Level(content[2].heroSkills[3].skillLvl.toString());
                    }
                    if(content[3] !== undefined){
                      setEctorLevel(content[3].heroLvl.toString());
                    setEctorStarLevel(content[3].heroStarLvl.toString());
                    setEctorSkill1Level(content[3].heroSkills[0].skillLvl.toString());
                    setEctorSkill2Level(content[3].heroSkills[1].skillLvl.toString());
                    setEctorSkill3Level(content[3].heroSkills[2].skillLvl.toString());
                    }
                    
                    if(content[0] !== undefined && content[0].appointed === true){
                        setAppointed(content[0].heroName);
                    }else if(content[1] !== undefined && content[1].appointed === true){
                        setAppointed(content[1].heroName);
                    }else if(content[1] !== undefined && content[2].appointed === true){
                        setAppointed(content[2].heroName);
                    }else if(content[3] !== undefined && content[3].appointed === true){
                        setAppointed(content[3].heroName);
                    }else{
                        setAppointed("None");
                    }


                }
            }
        )();    
    }, []);

    let pendragon;
    pendragon = <div>
        <p><strong>Aurelius Pendragon</strong></p>
                                    <div className="row">
                                        <div className='col-6'>
                                            <label>Hero Level</label>
                                        </div>
                                        <div className='col-6'>
                                            <select  style={selectStyle} value={pendragonLevel} onChange={e=> setPendragonLevel(e.target.value)}>
                                                    {pendragonLevelOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-6'>
                                            <label>Hero Star Level</label>
                                        </div>
                                        <div className='col-6'>
                                            <select  style={selectStyle} value={pendragonStarLevel} onChange={e=> setPendragonStarLevel(e.target.value)}>
                                                    {pendragonStarLevelOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-6'>
                                            <label>Righteous Fast</label>
                                        </div>
                                        <div className='col-6'>
                                            <select  style={selectStyle} value={pendragonskill1Level} onChange={e=> setPendragonSkill1Level(e.target.value)}>
                                                    {pendragonSkill1Options.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-6'>
                                            <label>Scholar's Supply</label>
                                        </div>
                                        <div className='col-6'>
                                            <select  style={selectStyle} value={pendragonskill2Level} onChange={e=> setPendragonSkill2Level(e.target.value)}>
                                                    {pendragonSkill2Options.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-6'>
                                            <label>Scholar's Fast</label>
                                        </div>
                                        <div className='col-6'>
                                            <select  style={selectStyle} value={pendragonskill3Level} onChange={e=> setPendragonSkill3Level(e.target.value)}>
                                                    {pendragonSkill3Options.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-6'>
                                            <label>Iron Saver</label>
                                        </div>
                                        <div className='col-6'>
                                            <select  style={selectStyle} value={pendragonskill4Level} onChange={e=> setPendragonSkill4Level(e.target.value)}>
                                                    {pendragonSkill4Options.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-6'>
                                            <label>Silver Saver</label>
                                        </div>
                                        <div className='col-6'>
                                            <select  style={selectStyle} value={pendragonskill5Level} onChange={e=> setPendragonSkill5Level(e.target.value)}>
                                                    {pendragonSkill5Options.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                            <br/>
                                        </div>
                                    </div> 
                                    <div className="row">
                                        <div className='col-6'>
                                            <label>Scholar's Ore</label>
                                        </div>
                                        <div className='col-6'>
                                            <select  style={selectStyle} value={pendragonskill6Level} onChange={e=> setPendragonSkill6Level(e.target.value)}>
                                                    {pendragonSkill6Options.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                            </select>
                                            <br/>
                                        </div>
                                    </div>
    </div>;

    let iseult;
    iseult = <div><p><strong>Iseult the Fair</strong></p>
<div className="row">
    <div className='col-6'>
        <label>Hero Level</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={iseultLevel} onChange={e=> setIseultLevel(e.target.value)}>
                {iseultLevelOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div>
<div className="row">
    <div className='col-6'>
        <label>Hero Star Level</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={iseultStarLevel} onChange={e=> setIseultStarLevel(e.target.value)}>
                {iseultStarLevelOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div>
<div className="row">
    <div className='col-6'>
        <label>Righteous Fast</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={iseultskill1Level} onChange={e=> setIseultSkill1Level(e.target.value)}>
                {iseultSkill1Options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div>
<div className="row">
    <div className='col-6'>
        <label>Scholar's Supply</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={iseultskill2Level} onChange={e=> setIseultSkill2Level(e.target.value)}>
                {iseultSkill2Options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div>
<div className="row">
    <div className='col-6'>
        <label>Scholar's Fast</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={iseultskill3Level} onChange={e=> setIseultSkill3Level(e.target.value)}>
                {iseultSkill3Options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div>
<div className="row">
    <div className='col-6'>
        <label>Iron Saver</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={iseultskill4Level} onChange={e=> setIseultSkill4Level(e.target.value)}>
                {iseultSkill4Options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div>
<div className="row">
    <div className='col-6'>
        <label>Silver Saver</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={iseultskill5Level} onChange={e=> setIseultSkill5Level(e.target.value)}>
                {iseultSkill5Options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div></div>;

    let ector;
    ector = <div><p><strong>Sir Ector</strong></p>
    <div className="row">
        <div className='col-6'>
            <label>Hero Level</label>
        </div>
        <div className='col-6'>
            <select style={selectStyle} value={ectorLevel} onChange={e=> setEctorLevel(e.target.value)}>
                    {ectorLevelOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
            </select>
            <br/>
        </div>
    </div>
    <div className="row">
        <div className='col-6'>
            <label>Hero Star Level</label>
        </div>
        <div className='col-6'>
            <select style={selectStyle} value={ectorStarLevel} onChange={e=> setEctorStarLevel(e.target.value)}>
                    {ectorStarLevelOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
            </select>
            <br/>
        </div>
    </div>
    <div className="row">
        <div className='col-6'>
            <label>Scholar's Fast</label>
        </div>
        <div className='col-6'>
            <select  style={selectStyle} value={ectorskill1Level} onChange={e=> setEctorSkill1Level(e.target.value)}>
                    {ectorSkill1Options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
            </select>
            <br/>
        </div>
    </div>
    <div className="row">
        <div className='col-6'>
            <label>Lumber Saver</label>
        </div>
        <div className='col-6'>
            <select  style={selectStyle} value={ectorskill2Level} onChange={e=> setEctorSkill2Level(e.target.value)}>
                    {ectorSkill2Options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
            </select>
            <br/>
        </div>
    </div>
    <div className="row">
        <div className='col-6'>
            <label>Righteous Fast</label>
        </div>
        <div className='col-6'>
            <select  style={selectStyle} value={ectorskill3Level} onChange={e=> setEctorSkill3Level(e.target.value)}>
                    {ectorSkill3Options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
            </select>
            <br/>
        </div>
    </div></div>;
    
    let balan;
    balan = <div><p><strong>Sir Balan</strong></p>
<div className="row">
    <div className='col-6'>
        <label>Hero Level</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={balanLevel} onChange={e=> setBalanLevel(e.target.value)}>
                {balanLevelOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div>
<div className="row">
    <div className='col-6'>
        <label>Hero Star Level</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={balanStarLevel} onChange={e=> setBalanStarLevel(e.target.value)}>
                {balanStarLevelOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div>
<div className="row">
    <div className='col-6'>
        <label>Righteous Fast</label>
    </div>
    <div className='col-6'>
        <select style={selectStyle} value={balanskill1Level} onChange={e=> setBalanSkill1Level(e.target.value)}>
                {balanSkill1Options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div>
<div className="row">
    <div className='col-6'>
        <label>Scholar's Supply</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={balanskill2Level} onChange={e=> setBalanSkill2Level(e.target.value)}>
                {balanSkill2Options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div>
<div className="row">
    <div className='col-6'>
        <label>Lumber Saver</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={balanskill3Level} onChange={e=> setBalanSkill3Level(e.target.value)}>
                {balanSkill3Options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div>
<div className="row">
    <div className='col-6'>
        <label>Iron Saver</label>
    </div>
    <div className='col-6'>
        <select  style={selectStyle} value={balanskill4Level} onChange={e=> setBalanSkill4Level(e.target.value)}>
                {balanSkill4Options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
        </select>
        <br/>
    </div>
</div></div>;


const submit = async (e: SyntheticEvent)=>{
        e.preventDefault();
        const response = await fetch(address, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include', 
            body: JSON.stringify({
                pendragonLevel,
                pendragonStarLevel,
                pendragonskill1Level,
                pendragonskill2Level,
                pendragonskill3Level,
                pendragonskill4Level,
                pendragonskill5Level,
                pendragonskill6Level,
                iseultLevel,
                iseultStarLevel,
                iseultskill1Level,
                iseultskill2Level,
                iseultskill3Level,
                iseultskill4Level,
                iseultskill5Level,
                balanLevel, 
                balanStarLevel,
                balanskill1Level,
                balanskill2Level,
                balanskill3Level,
                balanskill4Level,
                ectorLevel,
                ectorStarLevel,
                ectorskill1Level,
                ectorskill2Level,
                ectorskill3Level,
                appointed,
            })
        });


    const content = await response.json();
    if(content.response === "success"){
        setRedirect(true);
        
    }else{
        setError(content.message);
        //console.log(content);
    }
}

if(redirect){
    return <Redirect to='/user'/>;
}

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3 col-sm-3">
                    <LeftMenu/>
                </div>
                <div className="col-12 col-sm-9 col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <form className="form-signin" onSubmit={submit}>
                                <h3>Set your heroes</h3>
                                <br/>
                                {error !== "" &&
                                <p>{error}</p>
                            }
                                <p><small>*some values can be missing or innacurate. if you have the actual precise values and want to contribute <Link to="/contribute"  style={linkStyle}>click here</Link></small></p>
                                <br/>
                                <div className="row">
                                    <div className="col-6">
                                        {pendragon}
                                        <br/>
                                        {ector}                   
                                    </div>
                                    <div className="col-6">
                                        {iseult}
                                        <br/>
                                        {balan} 
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <div className="row">
                                    <div className='col-6'>
                                        <label style={{float: "right"}}>Who's appointed</label>
                                    </div>
                                    <div className='col-6'>
                                        <select style={{float: "left"}} value={appointed} onChange={e=> setAppointed(e.target.value)}>
                                                {appointedOptions.map((option) => (
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                        </select>
                                        <br/>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Heroes;