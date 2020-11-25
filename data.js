function getData(){
	var dataAMZ = {
	B07D9FB15R: {US: "https://amzn.to/3my7Gs3",CA: "",UK: ""},
	B07VVM1VM6: {US: "https://amzn.to/3mBCbNQ",CA: "",UK: ""},
	B07SDQ2NB7: {US: "https://amzn.to/35Q2nx9",CA: "",UK: ""},
	B00SOR41CO: {US: "https://amzn.to/3oFOlqK",CA: "",UK: ""},
	B06Y2LQ5QJ: {US: "https://amzn.to/31TWiyU",CA: "",UK: ""},
	B07HHP2JD8: {US: "https://amzn.to/3mCsTks",CA: "",UK: ""},
	B07HHNSL5H: {US: "https://amzn.to/3mAKbyr",CA: "",UK: ""},
	B00IJ0ALYS: {US: "https://amzn.to/3kMvYOs",CA: "",UK: ""},
	B0194RLK4Y: {US: "https://amzn.to/31Z10eB",CA: "",UK: ""},
	B01DLYQ4DS: {US: "https://amzn.to/37RiL3n",CA: "",UK: ""},
	B078SQSNV7: {US: "https://amzn.to/3e8Hbq2",CA: "",UK: ""},
	B004918MO2: {US: "https://amzn.to/3e9zUGx",CA: "",UK: ""},
	B001BMDFPS: {US: "https://amzn.to/31WJ4kQ",CA: "",UK: ""},
	B0088PTF3M: {US: "https://amzn.to/37UYPN5",CA: "",UK: ""},
	B07F6PDQP6: {US: "https://amzn.to/34Lvv9T",CA: "",UK: ""},
	B085WD92Q4: {US: "https://amzn.to/31T3I59",CA: "",UK: ""},
	B07F88P35C: {US: "https://amzn.to/3jB6132",CA: "",UK: ""},
	B07M8FFS51: {US: "https://amzn.to/32k9ZqQ",CA: "",UK: ""},
	B07MC3TNMM: {US: "https://amzn.to/3liAIfb",CA: "",UK: ""},
	B07QLVHBLF: {US: "https://amzn.to/3jHRIK2",CA: "",UK: ""},
	B07QTVMWVL: {US: "https://amzn.to/31W9BPi",CA: "",UK: ""},
	B07H4JD85M: {US: "https://amzn.to/3kCRSDL",CA: "",UK: ""},
	B07YFBW4W3: {US: "https://amzn.to/3oIFQeD",CA: "",UK: ""},
	B076FDQC2P: {US: "https://amzn.to/34LweYF",CA: "",UK: ""},
	B001ASTHJG: {US: "https://amzn.to/3mzFC7B",CA: "",UK: ""},
	B002R8CPRY: {US: "https://amzn.to/2TE6RkU",CA: "",UK: ""},
	B00J0S0JGS: {US: "https://amzn.to/3mBTChb",CA: "",UK: ""},
	B07HQRSQQT: {US: "https://amzn.to/3eha2IP",CA: "",UK: ""},
	B0000C16R8: {US: "https://amzn.to/3ecmlWT",CA: "",UK: ""},
	B07BDN8PML: {US: "https://amzn.to/2HJh3pE",CA: "",UK: ""},
	B01MUP6L1U: {US: "https://amzn.to/3jEtkc9",CA: "",UK: ""},
	B082P6G15G: {US: "https://amzn.to/37RkNAx",CA: "",UK: ""},
	B078MPFN55: {US: "https://amzn.to/37Tgh4i",CA: "",UK: ""},
	B00TL72F2E: {US: "https://amzn.to/34Gvd3S",CA: "",UK: ""},
	B07H4JD85M: {US: "https://amzn.to/2Gig1Re",CA: "",UK: ""},
	B00FMUYU6I: {US: "https://amzn.to/2JN6Olg",CA: "",UK: ""},
	B07PB4HJLZ: {US: "https://amzn.to/2HNAgqB",CA: "",UK: ""},
	B0012TCFBA: {US: "https://amzn.to/2HNf7MO",CA: "",UK: ""},
	B00JYUXUZO: {US: "https://amzn.to/2TAr1fN",CA: "",UK: ""},
	B07NQPLB1Q: {US: "https://amzn.to/3mzJ95R",CA: "",UK: ""},
	B00IVF9WL4: {US: "https://amzn.to/3oF511B",CA: "",UK: ""},
	B0001Q2VK0: {US: "https://amzn.to/3e7hPZK",CA: "",UK: ""},
	B01DOJDPQY: {US: "https://amzn.to/3ebzvmU",CA: "",UK: ""},
	B07KL4QGSQ: {US: "https://amzn.to/3jI3NPx",CA: "",UK: ""},
	B07M8DKFML: {US: "https://amzn.to/34Iiwp2",CA: "",UK: ""},
	B07D29QNMJ: {US: "https://amzn.to/2GaAuqS",CA: "",UK: ""},
	B07N5BBFZY: {US: "https://amzn.to/3kLd4aA",CA: "",UK: ""},
	B0863BNQPP: {US: "https://amzn.to/3jLCq70",CA: "",UK: ""},
	B081Z53L9T: {US: "https://amzn.to/2HNBB0B",CA: "",UK: ""},
	B07YKWFDQ7: {US: "https://amzn.to/31YdBPg",CA: "",UK: ""},
	B07GJBRKPC: {US: "https://amzn.to/3mBXpep",CA: "",UK: ""},
	B07L6Q2GSW: {US: "https://amzn.to/3jKKXXM",CA: "",UK: ""},
	B01M7M9NXX: {US: "https://amzn.to/3jFrEPO",CA: "",UK: ""},
	B07LBRDCTT: {US: "https://amzn.to/31W9jHX",CA: "",UK: ""},
	B07WTTCTBF: {US: "https://amzn.to/3jI4yIn",CA: "",UK: ""},
	B00HVLUR54: {US: "https://amzn.to/3mzFkh0",CA: "",UK: ""},
	B07CYH6H4Z: {US: "https://amzn.to/3oD3g4W",CA: "",UK: ""},
	B07WFKN8QR: {US: "https://amzn.to/2TAbyMC",CA: "",UK: ""},
	B01LWT246J: {US: "https://amzn.to/2TFfwUa",CA: "",UK: ""},
	B07HYWDS7D: {US: "https://amzn.to/3jGXNq9",CA: "",UK: ""},
	B01DVSBQZA: {US: "https://amzn.to/31T9Om3",CA: "",UK: ""},
	B07FPW5WXX: {US: "https://amzn.to/34Ehg6C",CA: "",UK: ""},
	B01ISTTBY0: {US: "https://amzn.to/3kItvEM",CA: "",UK: ""},
	B00450U6CS: {US: "https://amzn.to/31UIELI",CA: "",UK: ""},
	B01MRDNXPL: {US: "https://amzn.to/38m2RxW",CA: "",UK: ""},
	B07S76WBGF: {US: "https://amzn.to/2HNi3ci",CA: "",UK: ""},
	B083R4S47L: {US: "https://amzn.to/2HS89WL",CA: "",UK: ""},
	B01N11EMSO: {US: "https://amzn.to/3kO9IE4",CA: "",UK: ""},
	B07X551VLQ: {US: "https://amzn.to/2HHWhXr",CA: "",UK: ""},
	B083V8C38F: {US: "https://amzn.to/2HMw2iQ",CA: "",UK: ""},
	B07X53V3V6: {US: "https://amzn.to/3kHPMlT",CA: "",UK: ""},
	B01AL0W9YI: {US: "https://amzn.to/2TJRaZn",CA: "",UK: ""},
	B00N3CM2SK: {US: "https://amzn.to/31WLwrI",CA: "",UK: ""},
	B0899FRJNL: {US: "https://amzn.to/37TWVvX",CA: "",UK: ""},
	B01H21ZG30: {US: "https://amzn.to/2TEc8sI",CA: "",UK: ""},
	B075FGY7G2: {US: "https://amzn.to/3jKN2my",CA: "",UK: ""},
	B00JXS3BXI: {US: "https://amzn.to/35Md0Bf",CA: "",UK: ""},
	B00T9RANUC: {US: "https://amzn.to/34GfIZA",CA: "",UK: ""},
	B07GYP68HW: {US: "https://amzn.to/3kLsImr",CA: "",UK: ""},
	B000XRQUSQ: {US: "https://amzn.to/3kMDxok",CA: "",UK: ""},
	B00YEYKK8U: {US: "https://amzn.to/3jPYPAl",CA: "",UK: ""},
	B01B8GQ940: {US: "https://amzn.to/2TFhvb4",CA: "",UK: ""},
	B00Q7EPPDA: {US: "https://amzn.to/3ebqlaf",CA: "",UK: ""},
	B07XF9NYV3: {US: "https://amzn.to/3jKNIIC",CA: "",UK: ""},
	B00Q7EPPDA: {US: "https://amzn.to/2HF4JqY",CA: "",UK: ""},
	B07VPL2HYG: {US: "https://amzn.to/3mtQcwW",CA: "",UK: ""},
	B074MLZR3Y: {US: "https://amzn.to/3kJkiMe",CA: "",UK: ""},
	B001CNG7RY: {US: "https://amzn.to/3mCCh7G",CA: "",UK: ""},
	B003PCSR82: {US: "https://amzn.to/31UL5hk",CA: "",UK: ""},
	B074FKGR7F: {US: "https://amzn.to/34GgDt0",CA: "",UK: ""},
	B01MXIMVXG: {US: "https://amzn.to/3oHZZRJ",CA: "",UK: ""},
	B00C1EJPJA: {US: "https://amzn.to/2TQs23z",CA: "",UK: ""},
	B0067MQM48: {US: "https://amzn.to/2TJSGux",CA: "",UK: ""},
	B01B8DGNMQ: {US: "https://amzn.to/31WqtFw",CA: "",UK: ""},
	B01NAYM1TP: {US: "https://amzn.to/34F70Le",CA: "",UK: ""},
	B079V3J3Y9: {US: "https://amzn.to/3ecKOuZ",CA: "",UK: ""},
	B07B94ZR74: {US: "https://amzn.to/2TEWqNW",CA: "",UK: ""},
	B08FML8X8S: {US: "",CA: "",UK: ""},
	B073FMDBLJ: {US: "https://amzn.to/34I2lZ0",CA: "",UK: ""},
	B07ZPMCW64: {US: "https://amzn.to/3kHTzzD",CA: "",UK: ""},
	B0722R3WV5: {US: "https://amzn.to/3oGmgzz",CA: "",UK: ""},
	B07WLP395R: {US: "https://amzn.to/3eavqPM",CA: "",UK: ""},
	B07HXMLCBT: {US: "https://amzn.to/2GcOhxj",CA: "",UK: ""},
	B07S864GPW: {US: "https://amzn.to/3kUrHs8",CA: "",UK: ""},
	B07MWD9BFZ: {US: "https://amzn.to/3jI5Umb",CA: "",UK: ""},
	B07VVK39F7: {US: "https://amzn.to/37SeFIc",CA: "",UK: ""},
	B07T8YV9WS: {US: "https://amzn.to/2U5Zxi9",CA: "",UK: ""},
	B00154MGXY: {US: "https://amzn.to/2JIkEoR",CA: "",UK: ""},
	B0888Y891H: {US: "https://amzn.to/32pqJNt",CA: "",UK: ""},
	B07RSZSYNC: {US: "https://amzn.to/3p6fByN",CA: "",UK: ""},
	B07DVRK8LW: {US: "https://amzn.to/3oXiYrZ",CA: "",UK: ""},
	B00Q7EPSHI: {US: "https://amzn.to/35AxPkl",CA: "",UK: ""},
	B07GPNZSMY: {US: "https://amzn.to/2IT1QTi",CA: "",UK: ""},
	B01IU6RP12: {US: "https://amzn.to/3fbiw4B",CA: "",UK: ""},
	B078WKT1HL: {US: "https://amzn.to/3kHmSla",CA: "",UK: ""},
	B0798FVV6V: {US: "https://amzn.to/35ErFzz",CA: "",UK: ""},
	B0784ZKVKF: {US: "https://amzn.to/3pIlSkr",CA: "",UK: ""},
	B00QBZ25R4: {US: "https://amzn.to/2JcoHK1",CA: "",UK: ""},
	B01BMCWJ7G: {US: "https://amzn.to/2KEZTLo",CA: "",UK: ""},
	B07XSCBSN5: {US: "https://amzn.to/3pZOm9B",CA: "",UK: ""}
	}
	return dataAMZ;
}
