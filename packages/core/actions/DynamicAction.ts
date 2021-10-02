import type {
  BaseActionObject,
  BaseDynamicActionObject,
  EventObject,
  MachineContext
} from '../src/types';

export class DynamicAction<
  TContext extends MachineContext,
  TEvent extends EventObject,
  TAction extends BaseActionObject
> implements BaseDynamicActionObject<TContext, TEvent, TAction> {
  constructor(
    public type: `xstate.${string}`,
    public params: TAction['params'],
    public resolve: BaseDynamicActionObject<
      TContext,
      TEvent,
      TAction
    >['resolve']
  ) {}
}
