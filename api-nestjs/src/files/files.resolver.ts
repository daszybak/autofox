import { Resolver, Query, Args } from '@nestjs/graphql';
import { FilesService } from './files.service';
import { AuthenticatedUser, Resource, Scopes } from 'nest-keycloak-connect';
import { File } from '../@generated/file';
import { SasToken } from './dto/sas-token';
import { GetSasTokenArgs } from './dto/get-sas-token-file.args';

@Resolver(() => File)
@Resource(File.name)
export class FilesResolver {
	constructor(private readonly filesService: FilesService) {}

	@Query(() => SasToken)
	@Scopes('create')
	getSASToken(@AuthenticatedUser() user: any, @Args() args: GetSasTokenArgs) {
		return this.filesService.getSASToken(user.sub, args.data.filename);
	}
}
