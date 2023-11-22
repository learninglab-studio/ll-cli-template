# footage-storage-plan-20230829



| Syn copy 1 | Syn copy 2 | S3 Flexible Glacier | S3 Deep Archive |
| -------- | -------- | -------- | ----- |
|All Original |Recent Original(6 mo? 12 mo?) |All Original |All Original |
|All Proxy |N/A |All Proxy |N/A |


#### By Volume 
Primary Synology |From | To|
|----| ----- | ----- |
Synology 7 |2010_01 | 2017_12 |
Synology 8 |2018_01 | present |
Synology 10(proxy) |2010_01 | present |

Secondary Synology |From | To|
|----| ----- | ----- |
Synology 9 |2021_08 | present |

Glacier Flex |From | To|
|----| ----- | ----- |
mlv.team.2016 |2010_01 | 2021_06 |
ll.media.2013 |2021_07 | present |
TBD Proxy | 2010_01 | present |

Glacier Deep Archive |From | To|
|----| ----- | ----- |
TBD |2010_01 |  present |

## Next Steps
- Get ll.media.2023 up to date
- Then push all of history to Glacier Deep Archive
	- check what the cost would be to push from S3 vs Synology
- Build semi-automated process for generating proxy and pushing it up to Synology10
	- then ultimately push this up to S3 Flexible Glacier
- Clear excess from Synologys

### Considerations
- Do we want all our proxy on Synology10?
	- Current proxy folder is 3.24TB
		- Synology10 has 14TB available left 
		- Old Syn9 proxy copies are 18.16TB
	- 2019_01 through 2020_03
	- then 2021_11 through 2023
	- NOT totally up to date, even if the month folder is there