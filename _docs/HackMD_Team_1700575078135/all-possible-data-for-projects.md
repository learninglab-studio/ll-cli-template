# all-possible-data-for-projects

## all fields in PROJECTS as of 20230824
* Id (single line text)
* Title (single line text)
* _TYPE (linked field*)
* Project Abbreviation (single line text)
* TemporalFocusStatus (single select)
* ProjectLead (linked field*)
* Metaprojects (linked field*)
* CorrespondanceLog (from Metaprojects) (lookup)
* Context (multiselect)
* TwoThreeSentenceDescription (long text)
* Instructors (linked field*)
* Collaborators (linked field*)
* Role (from ProjectLead) (lookup)
* LastReviewed (date field)
* BulletedProjectDescription (long text)
* Created (date field)
* Abbreviation (from Metaprojects) (lookup)
* Notes (long text)
* HeroShot (attachment)
* LongerReportDescription (long text)
* SlugFormula (formula field)
* Type (from Metaprojects) (lookup)
* _COURSES (linked field*)
* Enrollment (from _COURSES) (lookup)
* RelevantLabs (multiselect)
* _TERMS (linked field*)
* AssociatedMetaprojectFolder (URL)
* SubType (linked field*)
* SubTypeAbbreviation (from SubType) (lookup)
* LevelOfEffort (Number)
* _TAGS (linked field*)
* _ProjectAssists (linked field*)

## linked fields and their lookup possibilites according to the tables

### _PROJECTTYPES table
#### fields we're linking to in projects
* _TYPE (linked field*)
#### other fields we could potentially create lookups to
* Name (primary field, single line text)
* Rationale (long text)
* Projects (linked field)
* SubType (linked field)
* TypeType (multiselect)
* TypeId (single line text)
* ll-tag-id (single line text)
### Users table
#### fields we're linking to in projects
* ProjectLeads
* ProjectAssists
* Role (from ProjectLead) (lookup)
#### other fields we could potentially create lookups to
* Name (primary field, formula)
* _PEOPLE (linked field to _PEOPLE)
* Slack_ID (from _PEOPLE) (lookup)
* SlackIdOverride (single line text)
* SlackId (formula)
* Role (single select)
* ForShort (single line text)
* NameForCode (formula)
* Slug (single line text)
* FirstName (single line text)
* LastName (single line text)
* Status (single select)

### Metaprojects table
#### fields we're linking to in projects
* Metaprojects (the primary field is called MetaprojectId)
* CorrespondanceLog (from Metaprojects) (lookup)
* Abbreviation (from Metaprojects) (lookup)
* Type (from Metaprojects) (lookup)
#### other fields we could potentially create lookups to
* Title (single line text)
* Description (long text)
* Instructors (linked field to _PEOPLE)
* Collaborators (linked field to _PEOPLE)
* SupportType (multiselect)
* MetaprojectType (multiselect)
* _COURSES (linked field to _COURSES)
* Created (date field)
* CorrespondanceLog (URL)
* Enrollment (from _COURSES) (lookup)
* _TERMS (from Projects) (lookup)

### _PEOPLE table
#### fields we're linking to in projects
* Instructors
* Collaborators
#### other fields we could potentially create lookups to
* Name (primary field)
* HUID
* LISTING_FIRST_NAME
* OFFICIAL_LAST_NAME
* Affiliated with
* MIDDLE_NAME
* EMAIL_PRIMARY (HUIT)
* EMAIL_SECONDARY (BOK)
* PHONE_WORK
* ADDRESS_1
* ADDRESS_2
* ADDRESS_STATE
* ADDRESS_CITY
* ADDRESS_ZIP
* ADDRESS_COUNTRY
* TITLE
* PRONOUNS
* DEPT_GYEAR
* STUDENT_GYEAR
* PHOTO
* SLACK_ID
* SLACK_USERNAME
* APPOINTMENTS
* PRIMARY_APPOINTMENT
* ADDRESS_3
* PHOTO_LINK
* UG_GRAD_YEAR
* lastUpdated_HUITAPI
* JOBCODE_DESCRIPTION
* HRDeptDesc
* Last Modified
* Schools
* Ranks
* Personnel_units
* Created By
* Last Modified By
* PREF_FIRST_NAME
* LISTING_LAST_NAME
* OFFICIAL_FIRST_ANME
* PREF_LASTNAME
* FIRST_NAME
* LAST_NAME
* Department Contacts
* Bok Appointments
* Programming Category
* Members
* LL_Role (from Members)
* Users
* MetaprojectsInstructors
* MetaprojectsCollaborators
* ProjectsInstructors
* ProjectsCollaborators
### _COURSES table
#### fields we're linking to in projects
* _COURSES
* Enrollment (from _COURSES) (lookup)
#### other fields we could potentially create lookups to
* Name (primary field)
* LL Courses - Synced
* daysOfWeek
* startTime
* endTime
* courseDescription
* Enrollment
* term
* termDescription
* catalogSubjectDescription
* courseNumber
* courseTitle
* BOK_client
* P&P Courses - Synced
* classTime
* Metaprojects
* Projects
* BokWhitepages
* Curriculum Units
* _CURRICULUM_UNITS


### _TERMS table
#### fields we're linking to in projects
* _TERMS 
#### other fields we could potentially create lookups to
* TermID (Primary field)
* TermName
* Year
* Projects
* ll-tag-id

### _TAGS table
#### fields we're linking to in projects
* _TAGS
#### other fields we could potentially create lookups to
* ll-tag-id (primary field)
* Name
* Id
* Notes
* Attachment
* SyncSource
* Projects
### SubTypes table
#### fields we're linking to in projects
* SubType
* SubTypeAbbreviation (from SubType) (lookup)
#### other fields we could potentially create lookups to
* Type
* Description
* Project