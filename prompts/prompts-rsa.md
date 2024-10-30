#prompt 1
@workspace
Hello how are you?

As a backend expert developer with TypeScript Node, I need you to add a new endpoint in the backend context (directory "/backend").
The path of this endpoint is "/position/:id/candidates" and it will retrieve all the candidates in progress for a specific position, meaning all the applications for a particular positionID. It should provide the following basic information:

- Candidate’s full name (from the candidate table).
- current_interview_step: the phase of the process the candidate is in (from the application table).
- The candidate's average score. That means we retrieve the scores of each interview of the candidate to process the average score.

Of course you'll must respect the project structure (you can find it in README.md).

I don't need you to code immediatly. I first need to know if you need other explanations.

#prompt 2
Ok, please proceed

#prompt 3
In order to respect the current project structure, I'de prefer that positionController.ts be located in src/presentation/controllers and positionService.ts be in src/application/services/ . And I prefer that we add a generic route for "position" operations as for candidates in index.ts ("app.use('/candidates', candidateRoutes)").  I do the modification, I don't need you to generate code.

#prompt 4
@workspace  Cool it works.  Now I need a new endpoint: /position/candidate/:id  This endpoint will update the stage of the moved candidate. It allows modification of the current interview process phase for a specific candidate.  Before generating code do you have any question?

#prompt 5
I've got this error when I build the backend context:  src/application/services/positionService.ts:23:5 - error TS2322: Type '{ candidateId: number; }' is not assignable to type 'ApplicationWhereUniqueInput'. Type '{ candidateId: number; }' is not assignable to type '{ id: number; } & { id?: number | undefined; AND?: ApplicationWhereInput | ApplicationWhereInput[] | undefined; OR?: ApplicationWhereInput[] | undefined; ... 9 more ...; interviews?: InterviewListRelationFilter | undefined; }'. Property 'id' is missing in type '{ candidateId: number; }' but required in type '{ id: number; }'.  23 where: { candidateId }, ~~~~~  node_modules/.prisma/client/index.d.ts:13144:5 13144 where: ApplicationWhereUniqueInput ~~~~~ The expected type comes from property 'where' which is declared here on type '{ select?: ApplicationSelect<defaultargs> | null | undefined; include?: ApplicationInclude<defaultargs> | null | undefined; data: (Without<...> & ApplicationUncheckedUpdateInput) | (Without<...> & ApplicationUpdateInput); where: ApplicationWhereUniqueInput; }'</defaultargs></defaultargs>  Found 1 error in src/application/services/positionService.ts:23

#prompt 6
